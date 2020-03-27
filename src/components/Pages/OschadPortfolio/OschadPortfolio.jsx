import React from "react";
import PortfolioItem from "../Portfolio/PortfolioItem/PortfolioItem";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import FourthSlide from "./FourthSlide";
import useFetchedContent from "../../../utilities/useFetchedContent";
import parser from "./parser";
import Spinner from "../../Utilities/Spinner/Spinner";
import classes from './OschadPortfolio.module.less';

function OschadPortfolio(props) {
  let [content, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    parser,
    name: "portfolio:oschad"
  });

  if (error) {
    content = error.message;
  }
  return (
    <PortfolioItem
      slides={
        content ? (
          [
            <FirstSlide content={content[0]} key={'firstSlide'} />,
            <SecondSlide content={content[1]} key={'secondSlide'} />,
            <ThirdSlide content={content[2]} key={'thirdSlide'} />,
            <FourthSlide content={content[3]} key={'fourthSlide'} />,
          ]
        ) : (
          <Spinner />
        )
      } className={classes.item}
    />
  );
}

export default OschadPortfolio;
