import React, { useState } from "react";
import OTPInput, { ResendOTP } from "otp-input-react";

const OTP = () => {
  const [OTP, setOTP] = useState("");
  console.log(OTP);
  return (
    <div className="d-flex">
      <OTPInput
        value={OTP}
        onChange={setOTP}
        autoFocus
        OTPLength={4}
        otpType="number"
        disabled={false}
        secure
      />
      <ResendOTP className="btn" onResendClick={() => console.log("Resend clicked")} />
      
    </div>
  );
};

export default OTP;
