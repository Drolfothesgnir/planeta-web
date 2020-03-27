import React from "react";
import ContentPage from "../../ContentPage/ContentPage";
import Spinner from "../../../Utilities/Spinner/Spinner";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./PortfolioItem.module.less";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";

function PortfolioItemContent({ slides }) {
  const [currentSlide, setSlide] = React.useState(0);
  const sliderRef = React.useRef(null);

  function goTo(i) {
    sliderRef.current.slickGoTo(i);
  }
  return (
    <>
      <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
        <Arrow className={classes.arrow}/>
        <span>Назад</span>
      </Link>
      <Slider
        settings={{
          infinite: false,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          buttons: false,
          dots: false,
          ref: sliderRef,
          beforeChange(_, next) {
            setSlide(next);
          }
        }}
      >
        {slides}
      </Slider>
      <div className={classes.navigation}>
        <ul>
          {[0, 1, 2, 3].map(n => {
            return (
              <li key={n}>
                <button
                  className={currentSlide === n ? classes.active : ""}
                  onClick={() => goTo(n)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

function PortfolioItem({slides, className}) {
    return <ContentPage
      className={`${className || ''} slick-height`}
      menuItem={"portfolio"}
      fallback={<Spinner />}
      component={PortfolioItemContent}
      props={{ slides }}
    />
}

export default PortfolioItem;
