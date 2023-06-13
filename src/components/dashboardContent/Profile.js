import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useGetCurrentUserQuery,
  useUpdateProfileMutation,
} from "../../RTK/auth/authApi";
import { useEffect } from "react";
import { toast } from "react-hot-toast";
import Spinner from "../Spinner";

const Profile = () => {
  const [updateProfile, { data, isLoading, error: proError, isError }] =
    useUpdateProfileMutation();

  const { data: currentUser, isLoading: currentLoading } =
    useGetCurrentUserQuery();

  useEffect(() => {
    if (data) {
      toast.success("Update Successful");
    } else if (isError) {
      toast.error(proError?.data?.message);
    }
  }, [data, isError, proError]);

  // const user = useSelector((state) => state.auth.user);

  const [img, setImg] = useState("");
  useEffect(() => {
    if (currentUser) setImg(currentUser?.photo);
  }, [currentUser]);

  const [error, setError] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = img;
    const name = form.name.value;
    const phone = form.mobile.value;

    updateProfile({
      name,
      phone,
      photo: photo,
      email: currentUser.email,
    });
  };

  function encodeImageFileAsURL(e) {
    var file = e.target.files[0];
    if (file.size > 32000) {
      setError("Image is too large");
    } else {
      var reader = new FileReader();
      reader.onloadend = function () {
        setImg(reader.result);
      };
      reader.readAsDataURL(file);
      setError("");
    }
  }

  return currentLoading || isLoading ? (
    <Spinner />
  ) : (
    <div className="card-body m-5">
      <h3>Profile</h3>
      <div className="container-fluid">
        {img && (
          <img
            className="icon-nav-img-lg"
            src={img}
            alt="asif"
            style={{ maxWidth: "200px" }}
          />
        )}
        <hr />
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4 p-2">
              <label>
                Profile Picture{" "}
                {error && <span className="text-danger">{error}</span>}{" "}
              </label>
              <input
                className="form-control animated fadeInUp"
                type="file"
                name="pic"
                onChange={encodeImageFileAsURL}
              />
            </div>
            <div className="col-4 p-2">
              <label>Email Address</label>
              <input
                readOnly
                placeholder="User Email"
                className="form-control animated fadeInUp"
                type="email"
                name="email"
                defaultValue={currentUser?.email}
                key={currentUser?.email}
              />
            </div>
            <div className="col-4 p-2">
              <label>User Name</label>
              <input
                readOnly
                placeholder="User Name"
                className="form-control animated fadeInUp"
                type="text"
                name="userName"
                defaultValue={currentUser?.userName}
                key={currentUser?.userName}
              />
            </div>
            <div className="col-4 p-2">
              <label>Name</label>
              <input
                placeholder="Name"
                className="form-control animated fadeInUp"
                type="text"
                name="name"
                defaultValue={currentUser?.name}
                key={currentUser?.name}
              />
            </div>
            <div className="col-4 p-2">
              <label>Mobile</label>
              <input
                placeholder="Mobile"
                className="form-control animated fadeInUp"
                type="number"
                name="mobile"
                defaultValue={currentUser?.phone}
                key={currentUser?.phone}
              />
            </div>
            <div className="col-4 p-2">
              <button
                type="submit"
                className="btn w-100 float-end btn-primary animated fadeInUp"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
