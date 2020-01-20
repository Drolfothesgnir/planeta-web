import React, { useState, useEffect } from 'react';
import withToggle from "../../../hoc/withToggle";
import classes from './MainMenu.module.less';

function MainMenu(props) {

  return (
    <nav
      className={[classes['main-menu'], props.isToggled ? classes['open'] : ''].join(
        ' '
      )}
    >
      <ul className="main-menu-links">
        <li className="nav-link">
          <a href="/about">о компании</a>
        </li>
        <li className="nav-link">
          <a href="/services">услуги</a>
        </li>
        <li className="nav-link">
          <a href="/tech">технологии</a>
        </li>
        <li className="nav-link">
          <a href="/portfolio">портфолио</a>
        </li>
        <li className="nav-link">
          <a href="/contacts">контакты</a>
        </li>
      </ul>
      <footer className="main-menu-footer">
        <a href=""></a><a href="">  </a>
      </footer>
    </nav>
  );
}
export default withToggle(MainMenu, 'nav-toggle');