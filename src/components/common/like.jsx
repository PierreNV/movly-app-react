import React from "react";

/* using sfc mod */

const Heart = (props) => {
	let heart = "fa fa-heart";
	if (!props.liked) heart += "-o";
	return (
		<i
			className={heart}
			aria-hidden="true"
			style={{ cursor: "pointer" }}
			onClick={props.onLike}></i>
	);
};

export default Heart;
