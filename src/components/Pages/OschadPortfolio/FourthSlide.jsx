import classes from "./OschadPortfolio.module.less";
import React from "react";

export default function FourthSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.fourth}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
        <div className={classes.firstRow}>
          <div className={classes.left}>
            <h4>{title}</h4>
            <div dangerouslySetInnerHTML={{ __html: description }} />
          </div>
          <ul className={classes.right}>
            {pictures.map(({ url, description }) => {
              return (
                <li key={url}>
                  <img src={url} alt={description} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className={classes.secondRow}>
          <h4>{pictures[0].description}</h4>
          <button className="btn btn-dark">Заказать Проект</button>
        </div>
      </div>
    </div>
  );
}
