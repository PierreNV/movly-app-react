import React from "react";
import { getCurrentUser } from "../../services/servAuth.mjs";
import { Navigate, useLocation } from "react-router-dom";

const UserLock = ({ component: Component, user }) => {
  const location = useLocation();
  if (user) {
    return <Component user={user} />;
  } else return <Navigate to="/login" state={{ from: location.pathname }} replace />;
};

export default UserLock;
