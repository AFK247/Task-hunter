import React from "react";
import { Outlet } from "react-router-dom";
import Content from "../dashboardContent/Content";
import Header from "../Header";
import LeftPannel from "../LeftPannel";
const DashboardLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="d-flex">
        <LeftPannel></LeftPannel>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
