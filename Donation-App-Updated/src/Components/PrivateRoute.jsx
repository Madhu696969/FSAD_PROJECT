import React from "react";
import { Navigate } from "react-router-dom";

/**
 * Wraps protected routes.
 * - No token → redirect to /signin
 * - Wrong role → redirect to own dashboard
 */
const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  if (role && user.role !== role) {
    if (user.role === "DONOR")    return <Navigate to="/donor" replace />;
    if (user.role === "CONSUMER") return <Navigate to="/consumer" replace />;
    if (user.role === "ADMIN")    return <Navigate to="/admin/home" replace />;
    return <Navigate to="/signin" replace />;
  }

  return children;
};

export default PrivateRoute;