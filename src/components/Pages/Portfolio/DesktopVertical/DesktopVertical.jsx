import React, { useEffect } from "react";
import Slider from "../../../Utilities/Slider/Slider";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons/faCaretRight";
import Arrow from "../../../Utilities/Arrow/Arrow";
import classes from "./DesktopVertical.module.less";
import getOverflowIndex from "../../../../utilities/getOverflowIndex";
import useWindowSize from "../../../../utilities/useWindowSize";
const colors = ['pink', 'orange', 'brown', 'blue']

function rad(n) {
  return (Math.PI / 180) * n;
}

let currentSpan = 0;
let prevSpan = 7;
let nextSpan = 1;

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
  const {width} = useWindowSize();
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
    currentSpan = getOverflowIndex(currentSpan - 1, 8);
    prevSpan = getOverflowIndex(prevSpan + 1, 8);
    nextSpan = getOverflowIndex(nextSpan + 1, 8);
    setAngle((prev) => prev - 45);
  };
  const right = () => {
    currentSpan = getOverflowIndex(currentSpan + 1, 8);
    prevSpan = getOverflowIndex(prevSpan - 1, 8);
    nextSpan = getOverflowIndex(nextSpan - 1, 8);
    setAngle((prev) => prev + 45);
  };
  const spans = [];
  for (let i = 0; i < 8; i++) {
    const isPrev = i === prevSpan;
    const isNext = i === nextSpan;
    spans.push(
      <span
        key={i}
        style={{
          left: -(Math.cos(rad(i * 45)) * 242) + 245 + "px",
          top: -(Math.sin(rad(i * 45)) * 242) + 245 + "px",
          backgroundImage: isPrev
            ? `url(${items[prevIndex].imgSrc})`
            : isNext
            ? `url(${items[nextIndex].imgSrc})`
            : "",
        }}
        className={isPrev || isNext ? classes.hoverButton : i === currentSpan ? 'black' : ''}
        onClick={isPrev ? prev : isNext ? next : null}
      ></span>
    );
  }
  const mobile_angle = width < 1280 ? 90 : 0;

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
            dir === "left" || dir === "up" ? left() : right();
          },
          responsive: [
            {
              breakpoint: 1279,
              settings: {
                vertical: false,
                verticalSwiping: false,
              },
            },
          ],
        }}
      >
        {items.map(({ title, buttonText, link, imgSrc }, i) => {
          return (
            <div key={title} className={classes.slide} >
              <div style={{backgroundColor: `${colors[i]}`, height: "100%"}}>
                  <span className={classes.bgTitle} style={{color: `${colors[i]}`}}>{title}</span>
                  <div className={classes.slideContent}>
                      <Link className={classes.link} to={link}>
                          <div className={classes.leftContent}>
                              <h2>{title}</h2>
                              <button className={`btn btn-portfolio`} to={link}>
                                  {buttonText}
                              </button>
                          </div>
                          <div className={classes.image}>
                              <img src={imgSrc} alt={title} />
                          </div>
                      </Link>
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
        style={{ transform: `rotate(${angle + mobile_angle}deg)` }}
      >
        {spans}
      </div>
    </div>
  );
}

export default DesktopVertical;
