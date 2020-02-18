import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactFormToggle } from "../../../../utilities/toggles";
import classes from "./ContactForm.module.less";
import http from "../../../../utilities/http";
import Inputmask from "inputmask";
import useFetchedContentState from "../../../../Store/Content/useFetchedContentState";
import { useLanguageState } from "../../../../utilities/language";
import { useContentState } from "../../../../Store/Content/store";
import {setContactFormSubmission} from "../../../../Store/Content/actions";

const parseFormData = data => {
  const typeMap = {
    email: "email",
    textfield: "text",
    webform_actions: "submit",
    tel: "tel"
  };

  const result = {};
  const dataArr = Object.entries(data);
  const submit = dataArr.findIndex(
    ([, item]) => item["#type"] === "webform_actions"
  );
  result.submit = dataArr[submit][1][["#title"]];
  dataArr.splice(submit, 1);
  result.fields = dataArr.map(([name, item]) => {
    return {
      name,
      title: item["#title"],
      type: typeMap[item["#type"]]
    };
  });
  return result;
};

const parser = data => ({
  form: parseFormData(data.elements),
  thankYou: {
    text: data.settings.confirmation_title,
    button: data.settings.confirmation_back_label
  }
});

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

const changeHandler = ({ target: t }) => {
  t.dataset.empty = t.value ? "false" : "true";
};

function ContactForm(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validateCriteriaMode: "all"
  });

  const content = useFetchedContentState({
    url: "/webform/call_back/get",
    name: "contactForm",
    parser
  });

  const [lang] = useLanguageState();
  const [, dispatch] = useContentState();

  const [{success, loading}, setStatus] = useState({success: false, loading: false});

  const submitHandler = data => {
    data.webform_id = "call_back";
    setStatus({success: false, loading: true});
    http
      .post("/webform_rest/submit", data)
      .then(res => {
        if (!res.data.error) {
          dispatch(setContactFormSubmission(true));
          setStatus({success: true, loading: false});
        }
      })
      .catch(console.log);
  };

  return success ? (
    <Redirect to={"/thank-you"} />
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
          {!content ? (
            "Loading..."
          ) : (
            <form onSubmit={handleSubmit(submitHandler)}>
              <div className={classes.fields}>
                {content.form.fields.map(({ name, title, type }) => {
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

                            register(e, validation[name]);
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
              <button type="submit" className="btn btn-light" disabled={loading}>
                {content.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
