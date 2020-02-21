import React from "react";
import classes from "./Portfolio.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../utilities/http";
import Spinner from "../../Utilities/Spinner/Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContentState } from "../../../Store/Content/store";
import {routeMap} from "../../../utilities/routeMap";
import {useLanguageState} from "../../../Context/language";

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
  const [{ mainMenu }] = useContentState();
  const [lang] = useLanguageState();
  const menu = mainMenu && mainMenu[lang];
  const content = items ? (
    items.map(({ title, link, imgSrc }) => {
      return (
        <li className={classes.portfolioItem} key={title}>
          <Link
            to={link}
            className={classes.previewImg}
            style={{ backgroundImage: `url(${imgSrc})` }}
          >
            <span>
              <FontAwesomeIcon icon="arrow-right" />
            </span>
          </Link>
          <h2 data-title={title}>
            <span>{title}</span>
          </h2>
        </li>
      );
    })
  ) : (
    <Spinner />
  );
  return (
    <div className={classes.portfolio}>
      <div className={classes.topContent}>
        <span>{menu[routeMap.portfolio].title}</span>
      </div>
      <div className={`container`}>
        <ul>{content}</ul>
      </div>
    </div>
  );
}

export default Portfolio;
