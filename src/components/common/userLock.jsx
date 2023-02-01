import React from "react";
import { getCurrentUser } from "../../services/servAuth";
import { Navigate, useLocation } from "react-router-dom";

const UserLock = ({ Component }) => {
	const location = useLocation();
	if (!getCurrentUser()) {
		return (
			<Navigate
				to="/login"
				state={{ from: location.pathname }}
				replace
			/>
		);
	}
	return <Component />;
};

export default UserLock;
