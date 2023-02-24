import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../assets/baseURL/baseURL";
import { setLoading } from "../redux/state/LoadingSlice";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();
  function handleClick() {
    localStorage.setItem("tempEmail", email);

    dispatch(setLoading(true));
    axios
      .get(`${BaseURL}/user/sendOpt/${email}`)
      .then(function (response) {
        // handle success
        console.log(response.data.message);
        if (response.data.message) {
          console.log(response.data.message);
          
          toast.success(response.data.message)
          dispatch(setLoading(false));
          
          navigate("/otp");
        }
      })
      .catch(function (error) {
        // handle error
        dispatch(setLoading(false));
        console.log(error.message);
      });
  }

  return (
    <div style={{ margin: "11% 24%" }} className="card w-50  p-4">
      <div className="card-body">
        <h5>Email Address</h5>
        <br />
        <label>Your email address</label>
        <input
          onChange={(event) => setEmail(event.target.value)}
          placeholder="User Email"
          className="form-control animated fadeInUp"
          type="email"
        />
        <br />
        <button
          onClick={handleClick}
          className="btn w-100 animated fadeInUp float-end btn-primary"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ForgetPassword;
