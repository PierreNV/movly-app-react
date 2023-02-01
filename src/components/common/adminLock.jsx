import React from "react";
import { getCurrentUser } from "../../services/servAuth";
import { Navigate } from "react-router-dom";

const AdminLock = ({ Component }) => {
	const user = getCurrentUser();
	const isAdmin = user && user.isAdmin;
	if (!isAdmin) {
		return (
			<Navigate
				to="/"
				replace
			/>
		);
	}
	return <Component />;
};

export default AdminLock;
