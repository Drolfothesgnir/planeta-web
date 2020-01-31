import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainMenu from "./MainMenu/MainMenu";
import ContactForm from "./ContactForm/ContactForm";
// import Canvas from "./Canvas/Canvas";
import { contactFormToggle } from "../../../utilities/toggles";
import { useLanguageState } from "../../../Store/Language/LanguageState";
import Toggle from "../../hoc/Toggle";
import imageSrc from "../../../assets/images/web-word.png";
import classes from "./Main.module.less";

function MainBody(props) {
  const [state] = useLanguageState();
  return (
    <div
      className={props.className}
      dangerouslySetInnerHTML={{ __html: state.translations.front_page.body }}
    />
  );
}

function FormToggle() {
  const [langState] = useLanguageState();
  return (
    <button className={classes.formToggle} onClick={contactFormToggle}>
      <span>{langState.translations.front_page.button}</span>
      <FontAwesomeIcon icon="long-arrow-alt-right" />
    </button>
  );
}

function Main() {
  return (
    <>
      <div className={classes.mainBg}>
        <div className={`container ${classes.container}`}>
          <div className={classes.mainInner}>
            <div className={classes.mainLeft}>
              <div className={classes.mainLogo}>
                <img src={imageSrc} alt="main-logo" />
              </div>
              <MainBody className={classes.mainText} />
              <FormToggle />
            </div>
            <div className={classes.mainRight}>{/*<Canvas />*/}</div>
          </div>
        </div>
      </div>
      <Toggle component={MainMenu} escape eventName="nav-toggle" />
      <Toggle component={ContactForm} escape eventName="contact-form" />
    </>
  );
}

export default Main;
