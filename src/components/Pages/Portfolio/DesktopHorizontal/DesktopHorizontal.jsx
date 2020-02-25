import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./DesktopHorizontal.module.less";

function DesktopHorizontal({ items }) {
  const itemList = items.map(({ title, imgSrc }) => (
    <div key={title} className={classes.slide}>
      <div className={classes.image}>
        <img src={imgSrc} alt={title} />
      </div>
      <h2>{title}</h2>
    </div>
  ));

  return items.length >= 2 ? (
    <div className={classes.desktopHorizontal}>
      <Slider
        settings={{
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          swipeToSlide: true,
          arrows: false,
          responsive: [
            {
              breakpoint: 1439,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1279,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 1023,
              settings: {
                slidesToShow: 1
              }
            }
          ]
        }}
      >
        {itemList}
      </Slider>
    </div>
  ) : (
    itemList
  );
}

export default DesktopHorizontal;
