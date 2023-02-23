import AllTask from "../components/dashboardContent/AllTask";
import CancelledTask from "../components/dashboardContent/CancelledTask";
import CompletedTask from "../components/dashboardContent/CompletedTask";
import Content from "../components/dashboardContent/Content";
import CreateTask from "../components/dashboardContent/CreateTask";
import NewTask from "../components/dashboardContent/NewTask";
import PendingTask from "../components/dashboardContent/PendingTask";
import Profile from "../components/dashboardContent/Profile";
import Settings from "../components/dashboardContent/Settings";
import DashboardLayout from "../components/layout/layout";
import Main from "../components/Main";
import ForgetPassword from "../pages/ForgetPassword";
import Login from "../pages/Login";
import NewPassword from "../pages/NewPassword";
import OTP from "../pages/OTP";
import Register from "../pages/Register";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgetPassword",
        element: <ForgetPassword></ForgetPassword>,
      },
      {
        path: "/otp",
        element: <OTP></OTP>,
      },
      {
        path: "/newPassword",
        element: <NewPassword></NewPassword>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout/>,
    children: [
      {
        path: "/dashboard",
        element: <Content></Content>,
      },
      {
        path: "/dashboard/allTask",
        element: <AllTask></AllTask>,
      },
      {
        path: "/dashboard/createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/dashboard/newTask",
        element: <NewTask></NewTask>,
      },
      {
        path: "/dashboard/pendingTask",
        element: <PendingTask></PendingTask>,
      },
      {
        path: "/dashboard/cancelledTask",
        element: <CancelledTask></CancelledTask>,
      },
      {
        path: "/dashboard/completedTask",
        element: <CompletedTask></CompletedTask>,
      },
      {
        path: "/dashboard/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/dashboard/settings",
        element:<Settings></Settings>,
      },
    ],
  },

  {
    path: "*",
    element: <h2>Eroooor Occured</h2>,
  },
]);

export default router;
