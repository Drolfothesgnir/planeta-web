import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./DesktopHorizontal.module.less";

function DesktopHorizontal({ items }) {
  return (
    <div className={classes.desktopHorizontal}>
      <Slider
        settings={{
          speed: 1500,
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: false,
          arrows: false
        }}
      >
        {items.map(({ title }) => (
          <h1 key={title}>{title}</h1>
        ))}
      </Slider>
    </div>
  );
}

export default DesktopHorizontal;
