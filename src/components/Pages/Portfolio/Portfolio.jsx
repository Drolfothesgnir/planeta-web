import React from "react";
import classes from "./Portfolio.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { BASE_URL } from "../../../utilities/http";
import Spinner from "../../Utilities/Spinner/Spinner";
import { useContentState } from "../../../Store/Content/store";
import { routeMap } from "../../../utilities/routeMap";
import { useLanguageState } from "../../../Context/language";
import useWindowSize from "../../../utilities/useWindowSize";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Mobile from "./Mobile/Mobile";

const DesktopHorizontal = React.lazy(() =>
  import("./DesktopHorizontal/DesktopHorizontal")
);

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
  const { width } = useWindowSize();
  const [pageLabelClosed, setState] = React.useState(false);
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
      <div
        className={`${classes.pageLabel} ${
          pageLabelClosed ? classes.closed : ""
        }`}
      >
        <span
          data-page-index={`${menu[routeMap.portfolio].index}`.padStart(2, "0")}
        >
          <span className={classes.text}>{menu[routeMap.portfolio].title}</span>
        </span>
        <button
          className={classes.close}
          onClick={() => setState(prev => !prev)}
        >
          <FontAwesomeIcon
            icon={pageLabelClosed ? "arrow-right" : "arrow-left"}
          />
        </button>
      </div>
      <div className={classes.content}>
        <Mobile items={items} />
        <React.Suspense fallback={<Spinner />}>
          {width >= 1280 ? <DesktopHorizontal items={items} /> : null}
        </React.Suspense>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

export default Portfolio;
