import React from "react";
import { getCurrentUser } from "../../services/servAuth";
import { Navigate, useLocation } from "react-router-dom";

const UserLock = ({ component: Component }) => {
	const location = useLocation();
	if (getCurrentUser()) {
		return <Component />;
	}
	return (
		<Navigate
			to="/login"
			state={{ from: location.pathname }}
			replace
		/>
	);
};

export default UserLock;
