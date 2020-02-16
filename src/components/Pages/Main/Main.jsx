import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import { contactFormToggle } from "../../../utilities/toggles";
import Toggle from "../../hoc/Toggle";
import Spinner from "../../Utilities/Spinner/Spinner";
import imageSrc from "../../../assets/images/web-word.png";
import planetimgSrc from "../../../assets/images/planet.svg";
import classes from "./Main.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";

const parser = data => ({
  body: data.body[0].value,
  button: data.field_button_text[0].value
});

function Main() {
  const text = useFetchedContent({ url: "/", name: "main:text", parser });
  return (
    <>
      <div className={classes.mainBg}>
        <div className={`container ${classes.container}`}>
          <div className={classes.mainInner}>
            {text ? (
              <>
                <div className={classes.mainLeft}>
                  <div className={classes.mainLogo}>
                    <img src={imageSrc} alt="main-logo" />
                  </div>
                  <div
                    className={classes.mainText}
                    dangerouslySetInnerHTML={{
                      __html: text.body
                    }}
                  />
                  <button
                    className={`${classes.formToggle} btn`}
                    onClick={contactFormToggle}
                  >
                    <span>{text.button}</span>
                  </button>
                </div>
                <div className={classes.mainRight}>
                  <div className={classes.planetImage}>
                    <img src={planetimgSrc} alt="planet" />
                  </div>
                </div>
              </>
            ) : (
              <Spinner className={classes.loader} />
            )}
          </div>
        </div>
      </div>
      <Toggle component={ContactForm} eventName="contact-form" />
    </>
  );
}

export default Main;
