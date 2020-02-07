import React, { useState } from "react";
import {useLanguageState} from "../../../../Store/Language/LanguageState";
import classes from "./NavToggle.module.less";
import { navToggle } from "../../../../utilities/toggles";

function NavToggle(props) {
  const [toggled, toggleFunc] = useState(false),
  [{lang, mainMenuToggle}] = useLanguageState(),
  text = mainMenuToggle[lang][+!toggled];
  return (
    <div className={`${classes.navToggleContainer} ${props.className || ''}`}>
      <button
        className={`${classes.navToggle} ${toggled ? classes.open : ""}`}
        onClick={e => {
          navToggle(e);
          toggleFunc(!toggled);
        }}
      >
        <div className={classes.burger}>
          <span/>
          <span/>
          <span/>
          <span/>
        </div>
        <span className={classes.menuStatus}>
          {text}
        </span>
      </button>
    </div>
  );
}

export default NavToggle;
