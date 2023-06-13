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
import PrivateRoute from "./PrivateRoute";

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
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Content></Content>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allTask",
        element: (
          <PrivateRoute>
            <AllTask></AllTask>
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/createTask",
        element: (
          <PrivateRoute>
            <CreateTask></CreateTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/newTask",
        element: (
          <PrivateRoute>
            <NewTask></NewTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/pendingTask",
        element: (
          <PrivateRoute>
            <PendingTask></PendingTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/cancelledTask",
        element: (
          <PrivateRoute>
            <CancelledTask></CancelledTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/completedTask",
        element: (
          <PrivateRoute>
            <CompletedTask></CompletedTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/settings",
        element: (
          <PrivateRoute>
            <Settings></Settings>
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "*",
    element: <h2>Eroooor Occured</h2>,
  },
]);

export default router;
