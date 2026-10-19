import React from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const navigate = useNavigate();

  const loginToken = localStorage.getItem("loginToken");
  if (loginToken) {
    return <Outlet />;
  }
  return <Navigate to="/login" replace />;

  return <div></div>;
};

export default ProtectedRoute;
