import React from "react";
import ContactForm from "./ContactForm/ContactForm";
import Spinner from "../../Utilities/Spinner/Spinner";
import imageSrc from "../../../assets/images/web-word.png";
import planetimgSrc from "../../../assets/images/planet.svg";
import classes from "./Main.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import createContext from "../../../utilities/createContext";

export const [Provider, useFormState] = createContext(false);

const parser = data => ({
  body: data.body[0].value,
  button: data.field_button_text[0].value
});

const Button = ({ text }) => {
  const [, toggle] = useFormState();
  return (
    <button
      className={`${classes.formToggle} btn`}
      onClick={() => {
        toggle(true);
      }}
    >
      <span>{text}</span>
    </button>
  );
};

function Main() {
  const [text] = useFetchedContent({ url: "/", name: "main:text", parser });
  return (
    <Provider>
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
                  <Button text={text.button} />
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
      <ContactForm useFormState={useFormState} />
    </Provider>
  );
}

export default Main;
