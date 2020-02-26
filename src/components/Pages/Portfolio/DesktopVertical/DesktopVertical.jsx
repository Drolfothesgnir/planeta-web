import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import { Link } from "react-router-dom";
import classes from "./DesktopVertical.module.less";

function DesktopVertical({ items }) {
  const [state, setState] = React.useState({
    currentSlide: 0
  });
  return (
    <div className={classes.desktopVertical}>
      <Slider
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          dots: false,
          arrows: false,
          beforeChange(_, next) {
            setState(prev => ({ ...prev, currentSlide: next }));
          }
        }}
      >
        {items.map(({ title, buttonText, link, imgSrc }) => {
          return (
            <div key={title} className={classes.slide}>
              <span className={classes.bgTitle}>{title}</span>
              <div className={classes.slideContent}>
                <div className={classes.leftContent}>
                  <h2>{title}</h2>
                  <Link className={`btn btn-dark`} to={link}>
                    {buttonText}
                  </Link>
                </div>
                <div className={classes.image}>
                  <img src={imgSrc} alt={title} />
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
      <h2 style={{ position: "absolute", top: "50%" }}>{`${state.currentSlide +
        1}/${items.length}`}</h2>
    </div>
  );
}

export default DesktopVertical;
