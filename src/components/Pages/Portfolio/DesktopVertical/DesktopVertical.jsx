import React from "react";
import Slider from "../../../Utilities/Slider/Slider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import classes from "./DesktopVertical.module.less";

function getPrevAndNextIndex(n, current) {
  return current === 0
    ? [n - 1, 1]
    : current === n - 1
    ? [n - 2, 0]
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
  const [{ currentSlide }, setState] = React.useState({
    currentSlide: 0
  });
  const [prevIndex, nextIndex] = getPrevAndNextIndex(
    items.length,
    currentSlide
  );

  const prev = () => sliderRef.current.slickPrev();
  const next = () => sliderRef.current.slickNext();

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
          },
          ref: sliderRef
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
                <Link to={link} className={classes.image}>
                  <img src={imgSrc} alt={title} />
                </Link>
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
    </div>
  );
}

export default DesktopVertical;
