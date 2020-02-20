import React from "react";
import classes from "./Portfolio.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utilities/http";
import Spinner from "../../Utilities/Spinner/Spinner";
import Slick from "react-slick";
import "./Portfolio.less";

const parser = data => {
  return data.map(({ title, view_node, nothing, field_image_preview }) => {
    const imgSrc = field_image_preview.replace(/^\//, "");
    return {
      title,
      link: view_node,
      buttonText: nothing,
      imgSrc: imgSrc ? BASE_URL + imgSrc : null
    };
  });
};

function Portfolio() {
  const [items] = useFetchedContent({
    url: "/portfolio",
    name: "portfolio",
    parser
  });
  const content = items ? (
    items.map(({ title, link, buttonText, imgSrc }) => {
      return (
        <div className={classes.portfolioItem} key={title}>
          <div
            className={classes.previewImg}
            style={{ backgroundImage: `url(${imgSrc})` }}
          />
          <h1>{title}</h1>
          <Link to={link}>{buttonText}</Link>
        </div>
      );
    })
  ) : (
    <Spinner />
  );
  return (
    <div className={classes.portfolio}>
      <div className={`hello container`}>
        <div className={classes.topContent}></div>
        <Slick
          settings={{
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          }}
        >
          {content}
        </Slick>
      </div>
    </div>
  );
}

export default Portfolio;
