import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import classes from "./DesktopVertical.module.less";

function getPrevAndNextIndex(max, current) {
  if (max < 2) {
    return [current, current];
  }
  if (max === 2) {
    return [+!current, +!current];
  }
  return current === 0
    ? [max - 1, 1]
    : current === max - 1
    ? [max - 2, 0]
    : [current - 1, current + 1];
}

const arrow = (
  <span className={classes.arrow}>
    <svg viewBox={"10 9 14 38"}>
      <line x1="17" y1="10" x2="17" y2="46" />
      <line x1="17" y1="10" x2="11" y2="16" />
      <line x1="23" y1="16" x2="17" y2="10" />
    </svg>
  </span>
);

function DesktopVertical({ items }) {
  const sliderRef = React.useRef(null);
  const [currentSlide, setSlide] = React.useState(0);
  const [angle, setAngle] = React.useState(0);
  const [prevIndex, nextIndex] = getPrevAndNextIndex(
    items.length,
    currentSlide >= items.length ? 0 : currentSlide
  );

  const prev = () => {
    sliderRef.current.slickPrev();
    right();
  };
  const next = () => {
    sliderRef.current.slickNext();
    left();
  };
  const left = () => {
    setAngle(prev => prev - 45);
  };
  const right = () => {
    setAngle(prev => prev + 45);
  };

  return (
    <div className={classes.desktopVertical}>
      <Slider
        settings={{
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: true,
          verticalSwiping: true,
          dots: false,
          ref: sliderRef,
          arrows: false,
          beforeChange(_, next) {
            setSlide(next);
          },
          onSwipe(dir) {
            (dir === "left") || (dir === 'up') ? left() : right();
          },
          responsive: [
            {
              breakpoint: 1279,
              settings: {
                vertical: false,
                verticalSwiping: false
              }
            }
          ]
        }}
      >
        {items.map(({ title, buttonText, link, imgSrc }) => {
          return (
            <div key={title} className={classes.slide}>
              <span className={classes.bgTitle}>{title}</span>
              <div className={classes.slideContent}>
                <div className={classes.leftContent}>
                  <h2>{title}</h2>
                  <Link className={`btn btn-portfolio`} to={link}>
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
      <p className={classes.counter}>
        <button onClick={prev}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
        <span>{`${currentSlide + 1}/${items.length}`}</span>
        <button onClick={next}>
          <FontAwesomeIcon icon={faCaretRight} />
        </button>
      </p>
      <button
        className={`${classes.verticalButton} ${classes.prev}`}
        onClick={prev}
      >
        {arrow}
        <span>{items[prevIndex].title}</span>
      </button>
      <button
        className={`${classes.verticalButton} ${classes.next}`}
        onClick={next}
      >
        {arrow}
        <span>{items[nextIndex].title}</span>
      </button>
      <div
        className={classes.circle}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <span></span>
      </div>
    </div>
  );
}

export default DesktopVertical;
