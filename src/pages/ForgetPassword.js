import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../assets/baseURL/baseURL";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate=useNavigate();
  function handleClick() {
    localStorage.setItem("tempEmail", email);
    localStorage.setItem("spinner", true);

    axios
      .get(`${BaseURL}/user/sendOpt/${email}`)
      .then(function (response) {
        // handle success
        console.log(response.data.message);
        if (response.data.message) {
          console.log(response.data.message);
          localStorage.setItem("spinner", false);
          alert(response.data.message);

          navigate("/otp");
        }
      })
      .catch(function (error) {
        // handle error
        localStorage.setItem("spinner", false);
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
