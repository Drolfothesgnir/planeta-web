import React from "react";
import { Link } from "react-router-dom";
import { navToggle } from "../../../utilities/toggles";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import classes from "./MainMenu.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";

const parser = data =>
  data.map(({ title, relative, key }) => ({ title, relative, key }));

function MainMenu(props) {
  const links = useFetchedContent({
    url: "/api/menu_items/main",
    parser,
    name: "mainMenu"
  });
  return (
    <nav
      className={`${classes.mainMenu} ${
        props.isToggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks}`}>
        {links
          ? links.map(({ title, relative, key }) => {
              return (
                <li key={key} className={`${classes.navLink}`}>
                  <Link to={relative} onClick={navToggle}>
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
