import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactFormToggle } from "../../../../utilities/toggles";
import { useLanguageState } from "../../../../Store/Language/LanguageState";
import classes from "./ContactForm.module.less";
import { http } from "../../../../utilities/http";
import Inputmask from "inputmask";
import { SET_FORM_SUBMISSION_FLAG } from "../../../../Store/Language/actionTypes";

const pattern = /^[0-9+]+[0-9-]{3,15}$/;

const regObject = {
   maxLength: 255,
  required: true
};

const validation = {
  name: {
    ...regObject,
    pattern: /^[a-z]+$/i
  },
  email: regObject,
  tel: {
    ...regObject,
    pattern
  },
  message: {
    ...regObject,
    maxLength: 350
  }
};

const im = new Inputmask("+380999999999", {
  placeholder: " ",
  removeMaskOnSubmit: true,
  showMaskOnHover: false
});

const formErrors = {
  name: {
    en: "Incorrect name",
    ru: "Некорректное имя",
    uk: "Некоректне імʼя"
  },
  email: {
    en: "Incorrect e-mail",
    ru: "Некорректный e-mail",
    uk: "Некоректний e-mail"
  },
  tel: {
    en: "Incorrect telephone",
    ru: "Некорректный телефон",
    uk: "Некоректний телефон"
  },
  message: {
    en: "Incorrect message",
    ru: "Некорректное сообщение",
    uk: "Некоректне повідомлення"
  }
};

const { log } = console;

const changeHandler = ({ target: t }) => {
  if (t.value) {
    t.dataset.empty = "false";
  } else {
    t.dataset.empty = "true";
  }
};

function ContactForm(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validateCriteriaMode: "all"
  });

  const [success, setStatus] = useState(false);

  const [
    {
      lang,
      translations: {
        form: { fields, submit }
      }
    },
    dispatch
  ] = useLanguageState();

  const submitHandler = data => {
    data.webform_id = "call_back";
    http
      .post("/webform_rest/submit", data)
      .then(res => {
        if (!res.data.error) {
          dispatch({ type: SET_FORM_SUBMISSION_FLAG, payload: true });
          setStatus(true);
        }
      })
      .catch(log);
  };

  return success ? (
    <Redirect to="/thank-you" />
  ) : (
    <div
      className={`overlay ${classes.contactForm} ${
        props.isToggled ? classes.open : ""
      }`}
    >
      <button className={`${classes.closeButton}`} onClick={contactFormToggle}>
        <FontAwesomeIcon icon="times" />
      </button>
      <div className="container">
        <div className={`${classes.formInner}`}>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className={classes.fields}>
              {fields.map(({ name, title, type }) => {
                return (
                  <fieldset key={name} data-field={name}>
                    <label>
                      <input
                        maxLength={50}
                        className={errors[name] && classes.error}
                        data-label={title}
                        onChange={e => {
                          changeHandler(e);
                        }}
                        type={type}
                        name={name}
                        ref={e => {
                          if (e && type === "tel") {
                            im.mask(e);
                          }

                          register(
                            e,
                            validation[name]
                          );
                        }}
                      />

                      <span>{title}</span>
                    </label>
                    {errors[name] && (
                      <span className={classes.error}>
                        {formErrors[name][lang]}
                      </span>
                    )}
                  </fieldset>
                );
              })}
            </div>
            <button type="submit" className="btn btn-light">
              {submit}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
