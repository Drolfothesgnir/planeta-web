import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactFormToggle } from "../../../../utilities/toggles";
import { useLanguageState } from "../../../../Store/Language/LanguageState";
import classes from "./ContactForm.module.less";
import { http } from "../../../../utilities/http";
import Inputmask from "inputmask";

const pattern = /\+380\s?\d{2}\s?\d{3}\s?\d{2}\s?\d{2}\s?$/;

const im = new Inputmask("+380 99 999 99 99", { placeholder: " ", removeMaskOnSubmit: true });
const { log } = console;
const submitHandler = data => {
  log(data);
  data.webform_id = "call_back";
  http
    .post("/webform_rest/submit", data)
    .then(log)
    .catch(log);
};

const changeHandler = ({ target: t }) => {
  if (t.value) {
    t.dataset.empty = "false";
  } else {
    t.dataset.empty = "true";
  }
};

const renderErrors = errors => {
  const list = Object.entries(errors).map(([name, { types }]) => {
    return Object.entries(types).map(([type, message]) => (
      <li key={`${name}_${type}`}>{message}</li>
    ));
  });
  return list.length ? <ul className={classes.errorList}>{list}</ul> : null;
};

function ContactForm(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onSubmit",
    validateCriteriaMode: "all"
  });
  const [
    {
      translations: {
        form: { fields, submit }
      }
    }
  ] = useLanguageState();
  return (
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
            {fields.map(({ name, title, type }) => {
              return (
                <fieldset key={name} data-field={name}>
                  <label>
                    <input
                        className={errors[name] && classes.error}
                      data-label={title}
                      onChange={e => {
                        changeHandler(e);
                        log(errors);
                      }}
                      type={type}
                      name={name}
                      ref={e => {
                        if (e && type === "tel") {
                          im.mask(e);
                        }

                        const regObject = {
                          required: `${title}: Field is required!`,
                          maxLength: {
                            message: `${title}: Field maximum length reached!`,
                            value: 50
                          },
                        };
                        register(e, type === 'tel' ? {
                          ...regObject,
                          pattern: {
                            message: 'Invalid telephone number!',
                            value: pattern
                          }
                        } : regObject);
                      }}
                    />

                    <span>{title}</span>
                  </label>
                </fieldset>
              );
            })}
            <button type="submit">{submit}</button>
            {renderErrors(errors)}
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
