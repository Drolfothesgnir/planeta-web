import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./DesktopVertical.module.less";

function DesktopVertical({ items }) {
  return (
    <div className={classes.desktopVertical}>
      <Slider
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          dots: false,
          arrows: false
        }}
      >
        {items.map(({ title }) => {
          return (
            <div key={title} className={classes.slide}>
                <span className={classes.bgTitle}>{title}</span>
              <h1>{title}</h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default DesktopVertical;
