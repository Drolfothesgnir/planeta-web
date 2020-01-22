import React from "react";
import { useForm } from "react-hook-form";
import withToggle from "../../../hoc/withToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { contactFormToggle } from "../../../../utilities/toggles";
import classes from "./ContactForm.module.less";

const formItems = [
  {
    label: "Имя",
    name: "name"
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

function ContactForm(props) {
  const { register, handleSubmit } = useForm();
  const [inputs, setFocus] = React.useState({});
  const changeHandler = ({target}) => {
    setFocus(state => ({...state, [target.name]: !!target.value}))
  };
  return (
    <div
      className={`overlay aic ${classes.contactForm} ${
        props.isToggled ? classes.open : ""
      }`}
    >
      <button className={`${classes.closeButton}`} onClick={contactFormToggle}>
        <FontAwesomeIcon icon="times" />
      </button>
      <div className="container">
        <div className={`${classes.formInner}`}>
          <form onSubmit={handleSubmit(data => console.log(data))}>
            {formItems.map(item => {
              return (
                <fieldset key={item.name}>
                  <label>
                    <input
                      type="text"
                      name={item.name}
                      className={`${inputs[item.name] ? classes.touched : ''}`}
                      ref={register(item.config || {})}
                      onChange={changeHandler}
                    />
                    <span>{item.label}</span>
                  </label>
                </fieldset>
              );
            })}
            <button type="submit">отправить</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withToggle(ContactForm, "contact-form");
