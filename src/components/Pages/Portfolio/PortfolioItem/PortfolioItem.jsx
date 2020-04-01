import React from "react";
import ContentPage from "../../ContentPage/ContentPage";
import Spinner from "../../../Utilities/Spinner/Spinner";
import classes from "./PortfolioItem.module.less";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";
import PageSlider from "../../../Utilities/PageSlider/PageSlider";

function PortfolioItemContent({ slides }) {
  return (
    <>
      <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
        <Arrow className={classes.arrow} />
        <span>Назад</span>
      </Link>
      <PageSlider>
        {slides}
      </PageSlider>
      </>
  );
}

function PortfolioItem({ slides, className }) {
  return (
    <ContentPage
      className={`${className || ""} slick-height`}
      menuItem={"portfolio"}
      fallback={<Spinner />}
      component={PortfolioItemContent}
      props={{ slides }}
    />
  );
}

export default PortfolioItem;
