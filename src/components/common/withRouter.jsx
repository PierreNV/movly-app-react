import React from "react";

import { useParams, useNavigate, useLocation } from "react-router-dom";

export function withRouter(Component) {
  return (props) => <Component {...props} params={useParams()} navigate={useNavigate()} location={useLocation()} />;
}
