import React from "react";
import useFetchedContent from "../../../../utilities/useFetchedContent";
import ContentPage from "../../ContentPage/ContentPage";
import Spinner from "../../../Utilities/Spinner/Spinner";
import Slider from "../../../Utilities/Slider/Slider";
import classes from "./PortfolioItem.module.less";
import parser from "./parser";
import Arrow from "../../../Utilities/Arrow/Arrow";
import { Link } from "react-router-dom";

function FirstSlide({
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
          <div className={classes.title}>
            <h1>{title}</h1>
            <a href={url} className={classes.link}>
              <span>{text}</span>
              <Arrow className={classes.arrow} />
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

function SecondSlide({
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
                  <img src={url} alt="" />
                </div>
                <p>{description}</p>
              </li>
            );
          })}
        </ul>
      </div>
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
    <div className={`${classes.slide} ${classes.third}`}>
      <span className={classes.bgTitle}>{title}</span>
      <div className={classes.slideContent}>
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
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <ul>
            {pictures.map(({ description }) => {
              return <li key={description}>{description}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function FourthSlide({
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
          <h4>{title}</h4>
          <button className="btn btn-dark">Заказать Проект</button>
        </div>
      </div>
    </div>
  );
}

function PortfolioItemContent({ content }) {
  const [currentSlide, setSlide] = React.useState(0);
  const sliderRef = React.useRef(null);

  function goTo(i) {
    sliderRef.current.slickGoTo(i);
  }
  return (
    <>
      <Link to={"/portfolio"} className={`${classes.link} ${classes.backLink}`}>
        <Arrow className={classes.arrow}/>
        <span>Назад</span>
      </Link>
      <Slider
        settings={{
          infinite: false,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          buttons: false,
          dots: false,
          ref: sliderRef,
          beforeChange(_, next) {
            setSlide(next);
          }
        }}
      >
        <FirstSlide content={content[0]} />
        <SecondSlide content={content[1]} />
        <ThirdSlide content={content[2]} />
        <FourthSlide content={content[3]} />
      </Slider>
      <div className={classes.navigation}>
        <ul>
          {[0, 1, 2, 3].map(n => {
            return (
              <li key={n}>
                <button
                  className={currentSlide === n ? classes.active : ""}
                  onClick={() => goTo(n)}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
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
      component={PortfolioItemContent}
      props={{ content }}
    />
  ) : (
    <Spinner />
  );
}

export default PortfolioItem;
