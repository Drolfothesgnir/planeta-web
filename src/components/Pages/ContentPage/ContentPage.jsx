import React from "react";
import classes from "./ContentPage.module.less";
import { useContentState } from "../../../Store/Content/store";
import { useLanguageState } from "../../../Context/language";
import { routeMap } from "../../../utilities/routeMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ContentPage(props) {
  const { className, menuItem, Component, fallback } = props;
  const [pageLabelClosed, setState] = React.useState(true);
  const [{ mainMenu }] = useContentState();
  const [lang] = useLanguageState();
  const menu = mainMenu && mainMenu[lang];
  return menu ? (
    <div className={`${classes.contentPage} ${className}`}>
      <div
        className={`${classes.pageLabel} ${
          pageLabelClosed ? classes.closed : ""
        }`}
      >
        <span
          data-page-index={`${menu[routeMap[menuItem]].index}`.padStart(2, "0")}
        >
          <span className={classes.text}>{menu[routeMap[menuItem]].title}</span>
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
        <Component {...props} loaded={!!menu}/>
      </div>
    </div>
  ) : fallback;
}

export default ContentPage;
