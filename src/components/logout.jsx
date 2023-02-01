import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../services/servAuth";
import { hoc } from "./common/hoc";

const Logout = (props) => {
	const onSignOut = async () => {
		logout();
		props.navigate("/");
		props.navigate(0);
	};
	return (
		<NavLink
			type="button"
			className="nav-link"
			aria-current="page"
			onClick={() => onSignOut()}>
			Sign out
		</NavLink>
	);
};

export default hoc(Logout);
