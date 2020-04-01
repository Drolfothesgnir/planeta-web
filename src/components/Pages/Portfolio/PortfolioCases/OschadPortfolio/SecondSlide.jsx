import classes from "./OschadPortfolio.module.less";
import React from "react";

export default function SecondSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.second}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <h4>{title}</h4>
        <div dangerouslySetInnerHTML={{ __html: description }} />
        <ul>
          {pictures.map(({ url, description }) => {
            return (
              <li key={description}>
                <div className={classes.image}>
                  <div className={classes.wrapper}>
                    <img src={url} alt={description} />
                    <span className={classes.line}/>
                  </div>
                </div>
                <p>
                  <span className={classes.line} />
                  {description}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
