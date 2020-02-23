import React from "react";
import classes from "./Portfolio.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { BASE_URL } from "../../../utilities/http";
import Spinner from "../../Utilities/Spinner/Spinner";
import { useContentState } from "../../../Store/Content/store";
import { routeMap } from "../../../utilities/routeMap";
import { useLanguageState } from "../../../Context/language";
import Mobile from "./Mobile/Mobile";

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

  return menu && items ? (
    <div className={classes.portfolio}>
      <div className={classes.pageLabel}>
        <span>{menu[routeMap.portfolio].title}</span>
      </div>
      <Mobile items={items} />
    </div>
  ) : (
    <Spinner />
  );
}

export default Portfolio;
