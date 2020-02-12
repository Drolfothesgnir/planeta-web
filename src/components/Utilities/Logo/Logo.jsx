import React from "react";
import imageSrc from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function Logo(props) {
  return (
    <div className={`${props.className || ""} logo`}>
      <Link to="/">
        <img src={imageSrc} alt="logo" />
      </Link>
    </div>
  );
}
