import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { userInfo } from "../../redux/state/UserSlice";

const UserHeader = () => {
  const user = useSelector((state) => state.user.value);
  const { email, realName, userName, photo, phone } = user;
  // console.log(user);
  const dispatch = useDispatch();
  const navigate=useNavigate();
  useEffect(() => {
    dispatch(userInfo());
  }, []);

  function handleLogout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("email");
      localStorage.removeItem("name");
      localStorage.removeItem("photo");
      localStorage.removeItem("userName");
      localStorage.removeItem("phone");

      toast.success("Logout Successful")
      navigate("/");
  }

  return (
    <nav class="navbar bg-light">
      <div class="container-fluid">
        <a class="navbar-brand ms-5">Task Hunter</a>
        <div class="d-flex" >
          <button
            onClick={handleLogout}
            class="btn btn-outline-success me-3"
          >
            Log Out
          </button>

          <Link
            to="/dashboard/profile"
            class="btn btn-outline-success"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default UserHeader;
