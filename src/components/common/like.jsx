import React from "react";
import { BiLike, BiSolidLike } from "react-icons/bi";

const Like = (props) => {
  if (props.liked) {
    <BiSolidLike />;
  } else return <BiLike />;
};

export default Like;
