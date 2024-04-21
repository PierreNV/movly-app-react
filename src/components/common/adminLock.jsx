import React from "react";
import { getCurrentUser } from "../../services/servAuth.mjs";
import { Navigate } from "react-router-dom";

const AdminLock = ({ component: Component }) => {
  const user = getCurrentUser();
  const isAdmin = user && user.isAdmin;
  if (isAdmin) {
    return <Component />;
  }
  return <Navigate to="/" replace />;
};

export default AdminLock;
