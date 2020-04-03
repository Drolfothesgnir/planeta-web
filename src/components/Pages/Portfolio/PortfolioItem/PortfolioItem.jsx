import React from "react";
import ContentPage from "../../ContentPage/ContentPage";
import classes from "./PortfolioItem.module.less";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";
import PageSlider from "../../../Utilities/PageSlider/PageSlider";

function PortfolioItem({ children, className, settings }) {
  return (
    <ContentPage
      className={`${className || ""} slick-height`}
      menuItem={"portfolio"}
    >
      <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
        <Arrow className={classes.arrow} />
        <span>Назад</span>
      </Link>
      <PageSlider settings={settings}>
        {children}
      </PageSlider>
    </ContentPage>
  );
}

export default PortfolioItem;
