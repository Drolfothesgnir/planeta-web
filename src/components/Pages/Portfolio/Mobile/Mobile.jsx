import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./Mobile.module.less";

function Mobile({ items }) {
  return (
    <div className={classes.portfolioMobile}>
      <div className="container">
        <ul>
          {items.map(({ title, link, imgSrc }) => {
            return (
              <li className={classes.portfolioItem} key={title}>
                <Link
                  to={link}
                  className={classes.previewImg}
                  style={{ backgroundImage: `url(${imgSrc})` }}
                >
                  <span>
                    <FontAwesomeIcon icon="arrow-right" />
                  </span>
                </Link>
                <h2 data-title={title}>
                  <span>{title}</span>
                </h2>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Mobile;
