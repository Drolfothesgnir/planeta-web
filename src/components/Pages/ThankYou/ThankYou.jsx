import React from "react";
import { Link, Redirect } from "react-router-dom";
import { useLanguageState } from "../../../Store/Language/LanguageState";
import formClasses from "../Main/ContactForm/ContactForm.module.less";
import imgSrc from "../../../assets/images/thank-you.png";
import classes from "./ThankYou.module.less";
import { SET_FORM_SUBMISSION_FLAG } from "../../../Store/Language/actionTypes";

function ThankYou() {
  const [
    {
      contactForm,
      translations: {
        thankYou: { text, button: buttonText }
      }
    },
    dispatch
  ] = useLanguageState();
  return contactForm ? (
    <div
      className={`${formClasses.contactForm} ${formClasses.open} ${classes.content} overlay`}
    >
      <div className="container">
        <div className={classes.page}>
          <div className={classes.check}>
            <img src={imgSrc} alt="alt" />
          </div>
          <p className={classes.text}>
            <span>{text}</span>
          </p>
          <Link
            className="btn"
            to={"/"}
            onClick={() =>
              dispatch({ type: SET_FORM_SUBMISSION_FLAG, payload: false })
            }
          >
            {buttonText}
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <Redirect to={"/"} />
  );
}

export default ThankYou;
