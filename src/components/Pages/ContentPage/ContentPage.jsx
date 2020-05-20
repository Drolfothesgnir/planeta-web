import React from "react";
import defaultClasses from "./ContentPage.module.less";
import { useContentState } from "../../../Store/Content/store";
import { useLanguageState } from "../../../Context/language";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Spinner from "../../Utilities/Spinner/Spinner";

function ContentPage(props) {
  const {
    links,
    onLinkClickFunc,
    active,
    classes = {},
    children,
    fallback = <Spinner />,
  } = props;
  const [pageLabelClosed, setState] = React.useState(true);
  const [{ mainMenu }] = useContentState();
  const [lang] = useLanguageState();
  const menu = mainMenu?.[lang];
  const pagePath = location.pathname.split("/")[1];
  const menuItem = menu?.find((item) => item.relative === "/" + pagePath);

  return menu ? (
    <div
      className={`${defaultClasses.contentPage} ${
        classes.contentPage || ""
      } slick-height`}
    >
      <div
        className={`${defaultClasses.contentPageLabel} ${
          classes.contentPageLabel || ""
        } ${pageLabelClosed ? defaultClasses.closed : ""}`}
      >
        <span data-page-index={`${menuItem.index}`.padStart(2, "0")}>
          <span
            className={`${defaultClasses.contentPageText} ${
              classes.contentPageText || ""
            }`}
          >
            {menuItem.title}
          </span>
        </span>
        <button
          className={`${defaultClasses.contentPageClose} ${
            classes.contentPageClose || ""
          }`}
          onClick={() => setState((prev) => !prev)}
        >
          <FontAwesomeIcon
            icon={pageLabelClosed ? "arrow-right" : "arrow-left"}
          />
        </button>
        {links && (
          <ul className={`${classes.nav} ${!pageLabelClosed && classes.open}`}>
            {links.map((data, index) => (
              <li
                key={data.key}
                className={`${index === active ? classes.active : ""}`}
              >
                <button
                  onClick={() => {
                    onLinkClickFunc(index);
                    setState(!pageLabelClosed);
                  }}
                >
                  {data.title}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div
        className={`${defaultClasses.contentPageContent} ${
          classes.contentPageContent || ""
        }`}
      >
        {children}
      </div>
    </div>
  ) : (
    fallback
  );
}

export default ContentPage;
