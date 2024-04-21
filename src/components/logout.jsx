import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../services/servAuth.mjs";
import { withRouter } from "./common/withRouter";

const Logout = (props) => {
  const onSignOut = async () => {
    logout();
    props.navigate("/");
    props.navigate(0);
  };
  return (
    <NavLink type="button" className="nav-link" aria-current="page" onClick={() => onSignOut()}>
      Sign out
    </NavLink>
  );
};

export default withRouter(Logout);
