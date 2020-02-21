import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./ContactForm.module.less";
import http from "../../../../utilities/http";
import Inputmask from "inputmask";
import useFetchedContentCallback from "../../../../utilities/useFetchedContentCallback";
import { useLanguageState } from "../../../../Context/language";
import { useContentState } from "../../../../Store/Content/store";
import parser from "./parser";
import { validation, formErrors } from "./validation";
import {
  setContactFormSubmissionFlag,
  setError,
  addContent
} from "../../../../Store/Content/actions";

const im = new Inputmask("+380999999999", {
  placeholder: " ",
  removeMaskOnSubmit: true,
  showMaskOnHover: false
});

const changeHandler = ({ target: t }) => {
  t.dataset.empty = t.value ? "false" : "true";
};

function ContactForm({ useFormState }) {
  const name = "contactForm";
  const [lang] = useLanguageState();
  const [state, dispatch] = useContentState();
  const content = state[name] && state[name][lang];
  const [{ success, loading }, setStatus] = useState({
    success: false,
    loading: false
  });
  const [toggled, toggle] = useFormState();
  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    validateCriteriaMode: "all"
  });

  useFetchedContentCallback(
    {
      url: "/webform/call_back/get",
      name,
      parser
    },
    (fetchedContent, error) => {
      if (!content) {
        if (error) {
          return dispatch(setError(name, error));
        }
        return dispatch(addContent(name, fetchedContent, lang));
      }
    }
  );

  const submitHandler = data => {
    data.webform_id = "call_back";
    setStatus({ success: false, loading: true });
    http
      .post("/webform_rest/submit", data)
      .then(res => {
        if (!res.data.error) {
          dispatch(setContactFormSubmissionFlag(true));
          setStatus({ success: true, loading: false });
        }
      })
      .catch(console.log);
  };

  return success ? (
    <Redirect to={"/thank-you"} />
  ) : (
    <div
      className={`overlay ${classes.contactForm} ${
        toggled ? classes.open : ""
      }`}
    >
      <button
        className={`${classes.closeButton}`}
        onClick={() => toggle(false)}
      >
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
              <button
                type="submit"
                className="btn btn-light"
                disabled={loading}
              >
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
