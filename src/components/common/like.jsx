import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Like = (props) => {
  if (props.liked) {
    return <FaHeart />;
  } else return <FaRegHeart />;
};

export default Like;
