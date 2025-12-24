import { createBrowserRouter, Navigate } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import { ProtectedRoute } from "./ProtectedRoute";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

import Rewards from "../pages/dashboard/Rewards";
import EarnPoints from "../pages/dashboard/EarnPoints";
import RedeemReward from "../pages/dashboard/RedeemReward";
import Home from "../pages/dashboard/Home";
import Discover from "../pages/dashboard/Discover";
import Subscription from "../pages/dashboard/Subscription";
import TechStack from "../pages/dashboard/TechStack";
import Setting from "../pages/dashboard/Setting";
import Library from "../pages/dashboard/Library";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <AuthLayout />,
    children: [
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          {
            path: "rewards",
            element: <Rewards />,
            children: [
              { path: "earn-points", element: <EarnPoints /> },
              { path: "redeem-rewards", element: <RedeemReward /> },
            ],
          },
          { path: "home", element: <Home /> },
          { path: "library", element: <Library /> },
          { path: "discover", element: <Discover /> },
          { path: "subscription", element: <Subscription /> },
          { path: "tech-stack", element: <TechStack /> },
          { path: "settings", element: <Setting /> },
        ],
      },
    ],
  },
]);
