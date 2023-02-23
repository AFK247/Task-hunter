import React from "react";

const Settings = () => {
  return (
    <div className="row d-flex justify-content-center align-item-center ms-5">
        
      <div>
      <h3 className="mb-4">Change Your Password</h3>
        <div className="card">
          <div className="card-body">
            <div className="p-2">
              <label>Previous Password</label>
              <input
                placeholder="Previous Password"
                className="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div className="p-2">
              <label>New Password</label>
              <input
                placeholder="New Password"
                className="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div className="p-2">
              <label>Confirm New Password</label>
              <input
                placeholder="Confirm New Password"
                className="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div className="p-2">
              <button className="btn w-100 float-end btn-primary animated fadeInUp">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
