import React from "react";
import { Link } from "react-router-dom";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import classes from "./MainMenu.module.less";
import { useMenuState } from "../menuContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContentState } from "../../../Store/Content/store";
import useFetchedContentCallback from "../../../utilities/useFetchedContentCallback";
import { useLanguageState } from "../../../Context/language";
import { addContent, setError } from "../../../Store/Content/actions";

const parser = (data, lang) => {
  if (!data.length) {
    return null
  }
  const result = {};
  data.forEach(({ title, relative, key }, index) => {
    const parts = relative.split("/");
    if (parts[1] === lang) {
      parts.splice(1, 1);
      relative = parts.join("/");
    }
    result[key] = {
      title,
      relative,
      key,
      index: index + 1
    };
  });
  return result;
};

function MainMenu() {
  const [state, dispatch] = useContentState();
  const name = "mainMenu";
  const [lang] = useLanguageState();
  const links = state[name] && state[name][lang];
  const [toggled, toggle] = useMenuState();
  const err = state[name] && state[name].error;
  useFetchedContentCallback(
    {
      url: "/apis/menu_items/main",
      parser,
      name: "mainMenu"
    },
    (fetchedContent, error) => {
      if (!links) {
        if (error) {
          return dispatch(setError(name, error));
        }
        return dispatch(addContent(name, fetchedContent, lang));
      }
    }
  );
  const closeMenu = () => toggle(false);
  if (err) {
    return 'Sorry...'
  }
  return (
    <nav
      className={`${classes.mainMenu} ${toggled ? classes.open : ""} overlay`}
    >
      <ul className={`${classes.mainMenuLinks}`}>
        {links
          ? Object.values(links).map(({ title, relative, key, index, uri }) => {
              return (
                <li key={key} className={`${classes.navLink}`}>
                  <Link
                    to={{ pathname: relative, state: [uri, index] }}
                    onClick={closeMenu}
                  >
                    <span className="glitch" data-text={title}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })
          : "Loading..."}
      </ul>
      <button onClick={closeMenu} className={classes.close}>
        <FontAwesomeIcon icon="times" />
      </button>
      <LangSelector
        onLangChange={closeMenu}
        className={classes.langSelector}
        activeClassName={classes.activeLang}
      />
    </nav>
  );
}
export default MainMenu;
