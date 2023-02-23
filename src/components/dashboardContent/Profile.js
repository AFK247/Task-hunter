import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userInfo } from "../../redux/state/UserSlice";

const Profile = () => {

  const user=useSelector((state)=>state.user.value)
  const {email,realName,userName,photo,phone}=user;
  console.log(user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userInfo())
},[])
  
 
  return (
    <div className="card-body m-5">
        <h3>Profile</h3>
      <div className="container-fluid">
        <img
          className="icon-nav-img-lg"
          src={photo}
          alt="asif"
          style={{ maxWidth: "200px" }}
        />
        <hr />
        <div className="row">
          <div className="col-4 p-2">
            <label>Profile Picture</label>
            <input
              placeholder="User Email"
              className="form-control animated fadeInUp"
              type="file"
            />
          </div>
          <div className="col-4 p-2">
            <label>Email Address</label>
            <input
              readOnly=""
              placeholder="User Email"
              className="form-control animated fadeInUp"
              type="email"
              value={email}
            />
          </div>
          <div className="col-4 p-2">
            <label>User Name</label>
            <input
              readOnly=""
              placeholder="User Name"
              className="form-control animated fadeInUp"
              type="text"
              value={userName}
            />
          </div>
          <div className="col-4 p-2">
            <label>Name</label>
            <input
              placeholder="Name"
              className="form-control animated fadeInUp"
              type="text"
              value={realName}
            />
          </div>
          <div className="col-4 p-2">
            <label>Mobile</label>
            <input
              placeholder="Mobile"
              className="form-control animated fadeInUp"
              type="number"
              value={phone}
            />
          </div>
          <div className="col-4 p-2">
            <button className="btn w-100 float-end btn-primary animated fadeInUp">
              Update
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
