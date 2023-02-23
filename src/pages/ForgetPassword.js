import React from "react";
import { Link } from "react-router-dom";

const ForgetPassword = () => {
  return (
    <div style={{margin:"11% 24%"}} class="card w-50  p-4">
      <div class="card-body">
        <h5>Email Address</h5>
        <br />
        <label>Your email address</label>
        <input
          placeholder="User Email"
          class="form-control animated fadeInUp"
          type="email"
        />
        <br />
        <Link to="/otp" class="btn w-100 animated fadeInUp float-end btn-primary">
          Next
        </Link>
      </div>
    </div>
  );
};

export default ForgetPassword;
