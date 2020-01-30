import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactFormToggle } from "../../../../utilities/toggles";
import { useLanguageState } from "../../../../Store/Language/LanguageState";
import classes from "./ContactForm.module.less";
import { http } from "../../../../utilities/http";

const submitHandler = data => {
  console.log(data);
  http.post("/webform_rest/submit", {
    data
  }).then(console.log).catch(console.log);
};

function ContactForm(props) {
  const { register, handleSubmit, errors } = useForm({
    mode: 'onChange'
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
                <fieldset key={name}>
                  <label>
                    <input onChange={() => console.log(errors)} type={type} name={name} ref={register({
                      maxLength: 15
                    })} />
                    <span>{title}</span>
                  </label>

                </fieldset>
              );
            })}
            <button type="submit">{submit}</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
