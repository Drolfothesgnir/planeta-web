import React from "react";
import { Link } from "react-router-dom";
import { useLanguageState } from "../../../Store/Language/LanguageState";
import classes from "./MainMenu.module.less";

function MainMenu(props) {
  const [
    {
      translations: { main_menu: links }
    }
  ] = useLanguageState();
  return (
    <nav
      className={`${classes.mainMenu} ${
        props.isToggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks} `}>
        {links.map(({ title, relative, key }) => {
          return (
            <li key={key} className={`${classes.navLink}`}>
              <Link to={relative}>
                <span className="glitch" data-text={title}>
                  {title}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default MainMenu;
