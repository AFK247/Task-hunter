import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userInfo } from "../../redux/state/UserSlice";

const UserHeader = () => {
  const user=useSelector((state)=>state.user.value)
  const {email,realName,userName,photo,phone}=user;
  // console.log(user);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(userInfo())
},[])

  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand ms-5">Task Hunter</a>
        <form class="d-flex" role="search">
          <button class="btn btn-outline-success me-3" type="submit">
            Log Out
          </button>

          <Link to="/dashboard/profile" class="btn btn-outline-success" type="submit">
            Profile
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default UserHeader;
