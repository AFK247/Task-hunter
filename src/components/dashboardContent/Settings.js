import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BaseURL } from "../../assets/baseURL/baseURL";
import { useChangePasswordMutation } from "../../RTK/auth/authApi";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const Settings = () => {
  const [error, setError] = useState("");

  const [changePassword, { data, isLoading, isError, error: responseError }] =
    useChangePasswordMutation();
  console.log(responseError?.data?.message);

  useEffect(() => {
    if (data) {
      toast.success("Password Changed Successfully");
    } else if (isError) {
      toast.error(responseError?.data?.message);
    }
  }, [data, isError, responseError]);

  const user = useSelector((state) => state.auth.user);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const previousPassword = form.prePass.value;
    const newPassword = form.newPass.value;
    const confirmNewPass = form.confirmNewPass.value;

    if (newPassword !== confirmNewPass) {
      setError("Password Didn't Match");
      return;
    }

    // if (!/(?=.*[!@#$&*])/.test(newPassword)) {
    //   setError("Please use atleast 1 special character");
    //   return;
    // }

    setError("");

    changePassword({
      previousPassword,
      newPassword,
      email: user.email,
    });
  };

  return (
    <div className="row d-flex justify-content-center align-item-center ms-5">
      <div>
        <h3 className="mb-4">Change Your Password</h3>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="p-2">
                <label>Previous Password</label>
                <input
                  placeholder="Previous Password"
                  className="form-control animated fadeInUp"
                  type="password"
                  name="prePass"
                />
              </div>
              <div className="p-2">
                <label>New Password</label>
                <input
                  placeholder="New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                  name="newPass"
                />
              </div>
              <div className="p-2">
                <label>Confirm New Password</label>
                <input
                  placeholder="Confirm New Password"
                  className="form-control animated fadeInUp"
                  type="password"
                  name="confirmNewPass"
                />
                <p className="text-danger">{error}</p>
              </div>
              <div className="p-2">
                <button
                  type="submit"
                  className="btn w-100 float-end btn-primary animated fadeInUp"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
