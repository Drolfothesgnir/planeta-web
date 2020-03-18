import React from "react";
import useFetchedContent from "../../../../utilities/useFetchedContent";
import ContentPage from "../../ContentPage/ContentPage";
import Spinner from "../../../Utilities/Spinner/Spinner";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./PortfolioItem.module.less";
import parser from "./parser";
import { BASE_URL } from "../../../../utilities/http";

function FirstSlide({
  content: {
    title,
    content,
    link: { url, text }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.first}`} data-title={title}>
      <div className={classes.firstRow}>
        <div className={classes.title}>
          <h1>{title}</h1>
          <a href={url}>{text}</a>
        </div>
        <div className={classes.image}>{/*<img src="" alt=""/>*/}</div>
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
  );
}

function SecondSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.second}`} data-title={title}>
      <h4>{title}</h4>
      <div dangerouslySetInnerHTML={{ __html: description }} />
      <ul>
        {pictures.map(({ url, description }) => {
          return (
            <li key={description}>
              <div className={classes.image}>
                <img src={BASE_URL + url} alt="" />
              </div>
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function ThirdSlide({
  content: {
    title,
    content: { description, pictures }
  }
}) {
  return (
    <div className={`${classes.slide} ${classes.third}`} data-title={title}>
      <ul className={classes.left}>
        {pictures.map(({ url, description }) => {
          return (
            <li key={description}>
              <img src={url} alt={description} />
            </li>
          );
        })}
      </ul>
      <div className={classes.right}>
        <h4>{title}</h4>
        <p>{description}</p>
        <ul>
          {pictures.map(({ description }) => {
            return (
              <div
                key={description}
                dangerouslySetInnerHTML={{ __html: description }}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function FourthSlide({content: {title, content: {description, pictures}}}) {
  return (
      <div className={`${classes.slide} ${classes.fourth}`} data-title={title}>
        <div className={classes.firstRow}>
          <div className={classes.left}>
            <h4>
              {title}
            </h4>
            <div dangerouslySetInnerHTML={{__html: description}}/>
          </div>
          <div className={classes.right}>
            
          </div>
        </div>
      </div>
  )
}

function PortfolioItem(props) {
  const [content, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    parser,
    name: "portfolio:" + props.match.params.path
  });
  if (error) {
    return error.message;
  }

  return content ? (
    <ContentPage
      className={`${classes.portfolioItem} slick-height`}
      menuItem={"portfolio"}
      fallback={<Spinner />}
      component={function() {
        return (
          <Slider
            settings={{
              infinite: false,
              vertical: true,
              verticalSwiping: true
            }}
          >
            <FirstSlide content={content[0]} />
            <SecondSlide content={content[1]} />
            <ThirdSlide content={content[2]} />
            <FourthSlide content={content[3]}/>
          </Slider>
        );
      }}
    />
  ) : (
    <Spinner />
  );
}

export default PortfolioItem;
