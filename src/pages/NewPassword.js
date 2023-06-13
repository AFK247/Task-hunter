import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { BaseURL } from "../assets/baseURL/baseURL";

const NewPassword = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const email = localStorage.getItem("tempEmail");
  const otp = localStorage.getItem("tempOTP");
  console.log(otp);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Password Didn't Match");
      return;
    }

    // if(!/(?=.*[!@#$&*])/.test(password)){
    //   setError("Please use atleast 1 special character");
    //   return;
    // }

    setError("");

    console.log(email, otp, password);

    axios
      .post(`${BaseURL}/user/passwordRecovery`, {
        email,
        otp,
        password,
      })
      .then(function (response) {
        console.log(response.data);
        toast.success(response.data.message);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div
          className="col-md-7 col-lg-6 center-screen"
          style={{ marginTop: "100px" }}
        >
          <div className="card w-90 p-4">
            <div className="card-body">
              <h5>Set New Password</h5>
              <br />
              <label>Your email address</label>
              <input
                readOnly
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
                name="email"
                value={email}
              />
              <br />
              <form onSubmit={handleSubmit}>
                <label>New Password</label>
                <input
                  placeholder="New Password"
                  name="password"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <br />
                <label>Confirm Password</label>

                <input
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  className="form-control animated fadeInUp"
                  type="password"
                />
                <p className="text-danger">{error}</p>
                <br />
                <button
                  type="submit"
                  className="btn w-100 animated fadeInUp float-end btn-primary"
                >
                  Next
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
