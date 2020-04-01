import Arrow from "../../../../Utilities/Arrow/Arrow";
import classes from "./OschadPortfolio.module.less";
import portfolioClasses from "../../PortfolioItem/PortfolioItem.module.less";
import React from "react";

export default function FirstSlide({
  content: {
    title,
    content,
    link: { url, text },
    imgSrc
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.first}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <div className={classes.firstRow}>
          <div className={portfolioClasses.title}>
            <h1>{title}</h1>
            <a
              href={url}
              className={`${portfolioClasses.link} ${classes.link}`}
            >
              <span>{text}</span>
              <Arrow className={`${portfolioClasses.arrow} ${classes.arrow}`} />
            </a>
          </div>
          <div className={classes.image}>
            <img src={imgSrc} alt={title} />
          </div>
        </div>
        <ul className={classes.secondRow}>
          {content.map(({ title, text }) => {
            return (
              <li key={title}>
                <h4>{title}</h4>
                <div dangerouslySetInnerHTML={{ __html: text }} />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
