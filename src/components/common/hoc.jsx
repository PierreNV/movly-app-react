import React from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";

export function hoc(Component) {
	return (props) => (
		<Component
			{...props}
			params={useParams()}
			navigate={useNavigate()}
			location={useLocation()}
		/>
	);
}
