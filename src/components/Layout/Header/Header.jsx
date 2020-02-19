import React from "react";
import Logo from "../../Utilities/Logo/Logo";
import NavToggle from "./NavToggle/NavToggle";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import classes from "./Header.module.less";

function Header({useMenuState}) {
  return (
    <header>
      <div className="container">
        <div className={classes.headerContent}>
          <Logo className={classes.logo}/>
          <NavToggle className={classes.navToggle} useMenuState={useMenuState}/>
          <LangSelector className={classes.langSelector}/>
        </div>
      </div>
    </header>
  );
}

export default Header;
