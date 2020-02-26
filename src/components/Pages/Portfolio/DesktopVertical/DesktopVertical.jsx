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
        <span>{items[prevIndex].title}</span>
      </button>
      <button
        className={`${classes.verticalButton} ${classes.next}`}
        onClick={next}
      >
        <span>{items[nextIndex].title}</span>
      </button>
    </div>
  );
}

export default DesktopVertical;
