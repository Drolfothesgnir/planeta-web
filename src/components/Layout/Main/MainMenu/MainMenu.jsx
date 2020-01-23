import React from "react";
import withToggle from "../../../hoc/withToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainMenu.module.less";

function MainMenu(props) {
  return (
    <nav
      className={`${classes.mainMenu} ${
        props.isToggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks} `}>
        <li className={classes.navLink}>
          <a href="/about">о компании</a>
        </li>
        <li className={classes.navLink}>
          <a href="/services">услуги</a>
        </li>
        <li className={classes.navLink}>
          <a href="/tech">технологии</a>
        </li>
        <li className={classes.navLink}>
          <a href="/portfolio">портфолио</a>
        </li>
        <li className={classes.navLink}>
          <a href="/contacts">контакты</a>
        </li>
      </ul>
      <footer className={classes.mainMenuFooter}>
        <div className={`${classes.socialLinks}`}>
          <a href="/facebook">
            <FontAwesomeIcon icon={["fab", "facebook-f"]} />
          </a>
          <span>|</span>
          <a href="/behance">
            <FontAwesomeIcon icon={["fab", "behance"]} />
          </a>
        </div>
        <div className={classes.mailLink}>
          <a href="mailto: order@planeta-web.com.ua">
            <FontAwesomeIcon icon="envelope"/>
            <span>order@planeta-web.com.ua</span>
          </a>
        </div>
      </footer>
    </nav>
  );
}
export default withToggle(MainMenu, "nav-toggle");
