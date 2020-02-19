import React from "react";
import { Link } from "react-router-dom";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import classes from "./MainMenu.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";

const parser = (data, lang) =>
  data.map(({ title, relative, key, uri }) => {
    const parts = relative.split('/');
    if (parts[1] === lang) {
      parts.splice(1, 1);
      relative = parts.join('/');
    }
    return {
      title,
      relative,
      key,
      uri
    }
  });

function MainMenu({useMenuState}) {
  const links = useFetchedContent({
    url: "/api/menu_items/main",
    parser,
    name: "mainMenu"
  });
  const [toggled, toggle] = useMenuState();
  return (
    <nav
      className={`${classes.mainMenu} ${
        toggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks}`}>
        {links
          ? links.map(({ title, relative, key }) => {
              return (
                <li key={key} className={`${classes.navLink}`}>
                  <Link to={relative} onClick={() => toggle(false)}>
                    <span className="glitch" data-text={title}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })
          : "Loading..."}
      </ul>
      <LangSelector
        className={classes.langSelector}
        activeClassName={classes.activeLang}
      />
    </nav>
  );
}
export default MainMenu;
