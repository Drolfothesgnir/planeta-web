import React, { useState } from "react";
import useFetchedContent from "../../../utilities/useFetchedContent";
import classes from "./TechnologyDetails.module.less";
import ContentPage from "../ContentPage/ContentPage";
import ContactForm from "../../Utilities/ContactForm/ContactForm";
import ScrollBar from "simplebar-react";
import "simplebar/src/simplebar.css";
// import { Link, useParams } from "react-router-dom";

const parser = (data) => {
  data = data.content.main_page_content.entity;
  return {
    title: data.title[0].value,
    text: data.body[0].value,
    image: data.field_image[1].uri[0].url,
  };
};

const TechnologyDetails = (props) => {
  // const [isOpen, setOpen] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [data, error] = useFetchedContent({
    url: `/block-layout?path=/${props.match.params.id}`,
    name: `/technologyDetails/${props.match.params.id}`,
    parser,
  });
  if (error) {
    return error.message;
  }
  // const { id } = useParams();
  // const [data, error] = useFetchedContent({
  //   url: props.match.path.split("/")[1],
  //   name: "/technologyDetails",
  // });
  // if (error) {
  //   return error.message;
  // }
  console.log(props.match.params.id);
  console.log(data);
  return (
    <div className={classes.wrapper}>
      <ContentPage>
        {data ? (
          <div className={classes.container}>
            {/* <ul className={`${classes.nav} ${isOpen && classes.open}`}>
              {data.map((data, index) => (
                <li
                  key={data.key}
                  className={`${
                    props.match.params.id === data.title.toLowerCase() &&
                    classes.top
                    } ${classes.link}`}
                >
                  <Link
                    to={`${data.view_node.split("/")[1]}`}
                    onClick={() => setOpen(!isOpen)}
                  >
                    {data.title}
                  </Link>
                </li>
              ))}
              <li>
                <button
                  className={`${classes.btnNav} ${isOpen && classes.activeBtn}`}
                  onClick={() => setOpen(!isOpen)}
                ></button>
              </li>
            </ul> */}
            <div className={classes.contentWrapper}>
              <object
                type="image/svg+xml"
                data={`http://back.planeta-web.co.ua${data.image}`}
                className={classes.obj}
              >
                <img
                  src={`http://back.planeta-web.co.ua${data.image}`}
                  alt=""
                />
              </object>
              <div className={classes.textWrapper}>
                <h3
                  className={classes.title}
                >{`Технологія "${data.title}"`}</h3>
                <ScrollBar
                  // className={classes.paragraph}
                  style={{ maxHeight: 300 }}
                >
                  {[...Array(50)].map((x, i) => (
                    <p key={i}>{i}</p>
                  ))}
                </ScrollBar>
              </div>
            </div>
            <div
              className={`${classes.formWrapper} ${
                animation ? classes.animationWrapper : ""
              }`}
            >
              <button
                className={`${classes.btn} btn btn-dark`}
                onClick={() => setAnimation(true)}
              >
                замовити проект
              </button>
              <div className={classes.containerForm}>
                <ContactForm
                  className={`${classes.form}`}
                  buttonClassname={"btn btn-dark"}
                />
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </ContentPage>
    </div>
  );
};

export default TechnologyDetails;
