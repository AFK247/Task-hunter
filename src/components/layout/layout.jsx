import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import UserHeader from "../dashboardContent/UserHeader";
import LeftPannel from "../LeftPannel";
const DashboardLayout = () => {
  if(localStorage.getItem('accessToken')){
    return (
      <div>
        <UserHeader></UserHeader>
        <div className="d-flex">
          <LeftPannel></LeftPannel>
          <Outlet/>
        </div>
      </div>
    );
  }else{
    return <Navigate to='/'/>
  }
};

export default DashboardLayout;
