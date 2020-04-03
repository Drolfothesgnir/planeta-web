import React from "react";
import classes from "./ContentPage.module.less";
import { useContentState } from "../../../Store/Content/store";
import { useLanguageState } from "../../../Context/language";
import { routeMap } from "../../../utilities/routeMap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../Utilities/Spinner/Spinner";

function ContentPage(props) {
  const {
    className = '',
    menuItem,
    children,
    fallback = <Spinner/>
  } = props;
  const [pageLabelClosed, setState] = React.useState(true);
  const [{ mainMenu }] = useContentState();
  const [lang] = useLanguageState();
  const menu = mainMenu?.[lang];
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
        {children}
      </div>
    </div>
  ) : (
    fallback
  );
}

export default ContentPage;
