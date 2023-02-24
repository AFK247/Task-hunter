import React, { useState } from "react";
import OTPInput from "otp-input-react";
import axios from "axios";
import { BaseURL } from "../assets/baseURL/baseURL";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const OTP = () => {
  const [OTP, setOTP] = useState("");
  const navigate=useNavigate();
  const email=localStorage.getItem("tempEmail")

  console.log(OTP);
  console.log(email);

  function clickHandler(){
    console.log("clicked button");
    localStorage.setItem("tempOTP", OTP);

    axios.get(`${BaseURL}/user/verifyOtp/${email}/${OTP}`)
      .then(function (response) {
        // handle success
        console.log(response.data.message);
        if(response.data.message){
          console.log(response.data.message);
          toast.success(response.data.message)
          navigate("/newPassword");
        }

      })
      .catch(function (error) {
        // handle error
        toast.error("Wrong OTP")
        console.log(error);
      })
  }

  return (
    <div style={{margin:"7% 34%",backgroundColor:"lightgray"}} className="rounded-4 p-5 col-4">
      <h3 className="mb-3">OTP Verification</h3>
      <h5>Check Your Mail</h5>
      <div >
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={6}
        otpType="alphanumeric"
        disabled={false}
        secure
      />
      <Link onClick={clickHandler} className="btn btn-secondary mt-4">NEXT</Link>
      </div>
      
    </div>
  );
};

export default OTP;
