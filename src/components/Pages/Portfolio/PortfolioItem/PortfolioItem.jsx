import React from "react";
import ContentPage from "../../ContentPage/ContentPage";
import classes from "./PortfolioItem.module.less";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";
import PageSlider from "../../../Utilities/PageSlider/PageSlider";
import useWindowSize from "../../../../utilities/useWindowSize";

function PortfolioItem({ children, className, settings }) {
  const {width} = useWindowSize()
  return (
      <div className={classes.wrapper}>
        <ContentPage
            className={`${className || ""} slick-height`}
            menuItem={"portfolio"}
        >
          <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
            <Arrow className={classes.arrow} />
            <span>Назад</span>
          </Link>
          {width >= 768 ? (
              <PageSlider settings={settings}>
                {children}
              </PageSlider> ) : (<div className={classes.container}>{children}</div>)}
        </ContentPage>
      </div>
  );
}

export default PortfolioItem;
