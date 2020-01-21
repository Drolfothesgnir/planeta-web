import React from "react";
import { useForm } from "react-hook-form";
import classes from "./ContactForm.module.less";

const formItems = [
  {
    label: "Имя",
    name: "name",
    config: {
      required: true,
      minLength: 10
    }
  },
  {
    label: "ТЕЛЕФОН",
    name: "tel"
  },
  {
    label: "e-mail",
    name: "mail"
  },
  {
    label: "сообщение",
    name: "message"
  }
];

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const [focusedInputs, setFocus] = React.useState({});
  const focusHandler = ({ target }) =>
    setFocus(state => ({ ...state, [target.name]: true }));

  return (
    <div className={`overlay ${classes.contactForm}`}>
      <div className="container">
        <div className={classes.formInner}>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            {formItems.map(item => {
              return (
                <fieldset key={item.name}>
                  <label
                    className={`${focusedInputs[item.name] ? "focused" : ""}`}
                  >
                    <span>{item.label}</span>
                    <input
                      type="text"
                      name={item.name}
                      ref={register(item.config || {})}
                      onFocus={focusHandler}
                    />
                  </label>
                </fieldset>
              );
            })}
            <button>Click</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
