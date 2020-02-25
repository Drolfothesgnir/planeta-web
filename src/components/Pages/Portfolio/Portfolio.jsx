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

const DesktopVertical = React.lazy(() =>
  import("./DesktopVertical/DesktopVertical")
);

const parser = data => {
  return data.map(({ title, view_node, nothing, field_image_preview }) => {
    const imgSrc = field_image_preview.replace(/^\//, "");
    return {
      title,
      link: view_node,
      buttonText: nothing,
      imgSrc: imgSrc ? BASE_URL + imgSrc : ""
    };
  });
};

function Portfolio() {
  const { width } = useWindowSize();
  const [pageLabelClosed, setState] = React.useState(true);
  const [inlineViewMode, setViewMode] = React.useState(false);
  const [items, error] = useFetchedContent({
    url: "/portfolio",
    name: "portfolio",
    parser
  });
  const [{ mainMenu }] = useContentState();
  const [lang] = useLanguageState();
  const menu = mainMenu && mainMenu[lang];
  if (error) {
    return error.message;
  }
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
        <React.Suspense fallback={<Spinner />}>
          {width >= 768 ? (
            inlineViewMode ? (
              <DesktopHorizontal items={items} />
            ) : (
              <DesktopVertical items={items} />
            )
          ) : (
            <Mobile items={items} />
          )}
        </React.Suspense>
      </div>
      <div className={classes.viewToggle}>
        <button
          className={`${inlineViewMode ? classes.active : ""} ${
            classes.inline
          }`}
          onClick={() => setViewMode(true)}
        >
          <span />
          <span />
          <span />
          <span />
        </button>
        <button
          className={`${!inlineViewMode ? classes.active : ""} ${
            classes.vertical
          }`}
          onClick={() => setViewMode(false)}
        >
          <span />
        </button>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}

export default Portfolio;
