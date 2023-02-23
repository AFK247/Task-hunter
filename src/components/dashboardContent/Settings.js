import React from "react";

const Settings = () => {
  return (
    <div class="row d-flex justify-content-center align-item-center ms-5">
        
      <div>
      <h3 className="mb-4">Change Your Password</h3>
        <div class="card">
          <div class="card-body">
            <div class="p-2">
              <label>Previous Password</label>
              <input
                placeholder="Previous Password"
                class="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div class="p-2">
              <label>New Password</label>
              <input
                placeholder="New Password"
                class="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div class="p-2">
              <label>Confirm New Password</label>
              <input
                placeholder="Confirm New Password"
                class="form-control animated fadeInUp"
                type="password"
              />
            </div>
            <div class="p-2">
              <button class="btn w-100 float-end btn-primary animated fadeInUp">
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
