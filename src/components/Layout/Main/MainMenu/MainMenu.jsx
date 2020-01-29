import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainMenu.module.less";

const links = [
  {
    label: 'о компании',
    to:'/about'
  },
  {
    label: 'услуги',
    to: '/services'
  },
  {
    label: 'технологии',
    to: "/tech"
  },
  {
    label: 'портфолио',
    to: "/portfolio"
  },
  {
    label: 'контакты',
    to: "/contacts"
  }
]

function MainMenu(props) {
  return (
    <nav
      className={`${classes.mainMenu} ${
        props.isToggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks} `}>
        {links.map(({label, to}) => {
          return (
              <li key={label} className={`${classes.navLink}`}>
                <Link to={to}>
                  <span className='glitch' data-text={label}>
                    {label}
                  </span>
                </Link>
              </li>
          )
        })}
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
            <FontAwesomeIcon icon="envelope" />
            <span>order@planeta-web.com.ua</span>
          </a>
        </div>
      </footer>
    </nav>
  );
}
export default MainMenu;
