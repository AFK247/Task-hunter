import React from "react";
import { toast } from "react-hot-toast";
import { BaseURL } from "../../assets/baseURL/baseURL";

const Settings = () => {
  const accessToken = localStorage.getItem("accessToken");
  const email = localStorage.getItem("email");

  const handleSubmit = (event) => {
    event.preventDefault();
    

    

    const form = event.target;

    const previousPassword = form.prePass.value;
    const newPassword = form.newPass.value;
    const confirmNewPass = form.confirmNewPass.value;

    console.log(previousPassword,newPassword,email);

    fetch(`${BaseURL}/user/changePassword`, {
      method: "PUT",
      body: JSON.stringify({
        previousPassword,
        newPassword,
        email,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        toast.success(data.message);
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(error.message);
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
            </div>
            <div className="p-2">
              <button type="submit" className="btn w-100 float-end btn-primary animated fadeInUp">
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
