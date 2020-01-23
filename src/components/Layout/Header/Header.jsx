import React from "react";
import Logo from "../../Logo/Logo";
import NavToggle from "./NavToggle/NavToggle";
import LangSelector from "./LangSelector/LangSelector";
import classes from "./Header.module.less";

function Header() {
  return (
    <header>
      <div className="container">
        <div className={classes.headerContent}>
          <Logo className={classes.logo}/>
          <NavToggle className={classes.navToggle}/>
          <LangSelector className={classes.langSelector}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
