import React from "react";

const Profile = () => {
  return (
    <div class="card-body m-5">
        <h3>Profile</h3>
      <div class="container-fluid">
        <img
          class="icon-nav-img-lg"
          src="https://avatars.githubusercontent.com/u/65336862?v=4"
          alt="asif"
          style={{ maxWidth: "200px" }}
        />
        <hr />
        <div class="row">
          <div class="col-4 p-2">
            <label>Profile Picture</label>
            <input
              placeholder="User Email"
              class="form-control animated fadeInUp"
              type="file"
            />
          </div>
          <div class="col-4 p-2">
            <label>Email Address</label>
            <input
              readonly=""
              placeholder="User Email"
              class="form-control animated fadeInUp"
              type="email"
              value="asifferdous23@gmail.com"
            />
          </div>
          <div class="col-4 p-2">
            <label>User Name</label>
            <input
              readonly=""
              placeholder="User Name"
              class="form-control animated fadeInUp"
              type="text"
              value="asif"
            />
          </div>
          <div class="col-4 p-2">
            <label>Name</label>
            <input
              placeholder="Name"
              class="form-control animated fadeInUp"
              type="text"
              value="asif"
            />
          </div>
          <div class="col-4 p-2">
            <label>Mobile</label>
            <input
              placeholder="Mobile"
              class="form-control animated fadeInUp"
              type="number"
              value="123"
            />
          </div>
          <div class="col-4 p-2">
            <button class="btn w-100 float-end btn-primary animated fadeInUp">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
