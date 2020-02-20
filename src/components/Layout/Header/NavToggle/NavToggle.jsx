import React from "react";
import { useLanguageState } from "../../../../Context/language";
import classes from "./NavToggle.module.less";
import {useMenuState} from "../../menuContext";

const mainMenuToggle = {
  en: ["close", "menu"],
  ru: ["закрыть", "меню"],
  uk: ["закрити", "меню"]
};
function NavToggle(props) {
  const [toggled, toggleFunc] = useMenuState(),
    [lang] = useLanguageState();
  const text = mainMenuToggle[lang][+!toggled];
  return (
    <div className={`${classes.navToggleContainer} ${props.className || ""}`}>
      <button
        className={`${classes.navToggle} ${toggled ? classes.open : ""}`}
        onClick={() => {
          toggleFunc(!toggled);
        }}
      >
        <div className={classes.burger}>
          <span />
          <span />
          <span />
          <span />
        </div>
        <span className={classes.menuStatus}>{text}</span>
      </button>
    </div>
  );
}

export default NavToggle;
