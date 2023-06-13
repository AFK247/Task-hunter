import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../redux/state/UserSlice";
import { userLoggedOut } from "../../RTK/auth/authSlice";
import { apiSlice } from "../../RTK/api/apiSlice";

const UserHeader = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleLogout() {
    localStorage.clear();
    dispatch(userLoggedOut());
    navigate("/");
    navigate(0);
  }

  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <h5 class="navbar-brand ms-5">Task Hunter</h5>
        <div class="d-flex">
          <button onClick={handleLogout} class="btn btn-outline-success me-3">
            Log Out
          </button>

          <Link to="/dashboard/profile" class="btn btn-outline-success">
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
