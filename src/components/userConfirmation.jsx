import React from "react";
import { confirmUser } from "../services/servAuth.mjs";
import { withRouter } from "./common/withRouter";
import { useLocation } from "react-router-dom";

const UserConfirmation = (props) => {
  const params = new URLSearchParams(useLocation().search);

  const onConfirmUser = async () => {
    const token = params.get("token");
    const tokenId = params.get("tokenId");
    await confirmUser(token, tokenId);
    props.navigate("/login");
    props.navigate(0);
  };
  return (
    <div className="container text-center">
      <h1 className="h3 mb-5 fw-normal">User confirmation</h1>
      <button type="button" className="btn btn-primary" aria-current="page" onClick={() => onConfirmUser()}>
        Activate your account
      </button>
    </div>
  );
};

export default withRouter(UserConfirmation);
