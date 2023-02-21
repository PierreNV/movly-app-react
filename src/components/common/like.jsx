import React from "react";

/* using sfc mod */

const Like = (props) => {
	let heart = "fa fa-heart";
	if (!props.liked) heart += "-o";
	return (
		<i
			className={heart}
			aria-hidden="true"
			role="button"
			onClick={props.onLike}></i>
	);
};

export default Like;
