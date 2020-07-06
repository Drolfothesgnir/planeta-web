import React, { useEffect } from "react";
import Slider from "../../../Utilities/Slider/Slider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Arrow from "../../../Utilities/Arrow/Arrow";
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

function DesktopVertical({ items }) {
  const sliderRef = React.useRef(null);
  const [currentSlide, setSlide] = React.useState(0);
  const [angle, setAngle] = React.useState(0);
  const [prevIndex, nextIndex] = getPrevAndNextIndex(
    items.length,
    currentSlide >= items.length ? 0 : currentSlide
  );
  const slide = (y) => {
    y > 0 ? next() : prev();
  };
  const wheelHandler = (e) => slide(e.deltaY);
  useEffect(() => {
    addEventListener("wheel", wheelHandler);
    return () => {
      removeEventListener("wheel", wheelHandler);
    };
  });

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
            <div key={title} className={classes.slide} style={{ backgroundColor: '#f3f4f6' }}>
              <span className={classes.bgTitle} style={{ color: 'red' }}>{title}</span>
              <Link to={link} className={classes.slideContent}>
                <div className={classes.leftContent}>
                  <h2>{title}</h2>
                  <Link className={`btn btn-portfolio`} to={link}>
                    {buttonText}
                  </Link>
                </div>
                <div className={classes.image}>
                  <img src={imgSrc} alt={title} />
                </div>
              </Link>
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
        <Arrow className={classes.arrow} />
        <span>{items[prevIndex].title}</span>
      </button>
      <button
        className={`${classes.verticalButton} ${classes.next}`}
        onClick={next}
      >
        <Arrow className={classes.arrow} />
        <span>{items[nextIndex].title}</span>
      </button>
      <div
        className={classes.circle}
        style={{ transform: `rotate(${angle}deg)` }}
      >
        <span />
      </div>
    </div>
  );
}

export default DesktopVertical;
