import React, {useEffect} from "react";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./DesktopHorizontal.module.less";
import { Link } from 'react-router-dom'
import Arrow from "../../../Utilities/Arrow/Arrow"
const colors = ['pink', 'orange', 'brown', 'blue']

function DesktopHorizontal({ items }) {
    const sliderRef = React.useRef(null);
    const itemList = items.map(({ title, imgSrc, link }, i) => (
          <Link key={title} to={link} className={classes.slideLink}>
                  <div className={`${classes.slide} ${classes.i}`}  style={{backgroundColor: colors[i]}}>
                      <div className={classes.image}>
                          <img src={imgSrc} alt={title} />
                      </div>
                      <h2>{title}</h2>
                  </div>
          </Link>
  ));

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
    };
    const next = () => {
        sliderRef.current.slickNext();
    };

  return items.length >= 2 ? (
    <div className={classes.desktopHorizontal}>
      <Slider
        settings={{
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            swipeToSlide: true,
            arrows: false,
            ref: sliderRef,
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
        <button onClick={prev}>
            <Arrow className={`${classes.arr} ${classes.prev}`}  />
        </button>
        <button onClick={next}>
            <Arrow className={`${classes.arr} ${classes.next}`}  />
        </button>
    </div>
  ) : (
    itemList
  );
}

export default DesktopHorizontal;
