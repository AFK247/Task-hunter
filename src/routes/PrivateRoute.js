import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

//Private Route
const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state.auth.user);
  // const location = useLocation();
  const navigate = useNavigate();

  return user ? children : navigate("/");

  // if (user?.accessToken) {
  //   return children;
  // }
  // console.log("niche ashce ");

  // return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
