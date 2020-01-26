import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MainMenu from "./MainMenu/MainMenu";
import ContactForm from "./ContactForm/ContactForm";
import { contactFormToggle } from "../../../utilities/toggles";
import Toggle from "../../hoc/Toggle";
import imageSrc from "../../../assets/images/web-word.png";
import classes from "./Main.module.less";

function Main() {
  return (
    <main className={`${classes.mainContent}`}>
      <div className={classes.mainBg}>
        <div className="container">
          <div className={classes.mainInner}>
            <div className={classes.mainLeft}>
              <div className={classes.mainLogo}>
                <img src={imageSrc} alt="main-logo" />
              </div>
              <div className={classes.mainText}>
                <p>
                  Мы знаем, что кратчайший путь к развитию прибыльного бизнеса –
                  реализация нестандартных решений, при использовании новейших
                  технологий. Каждый сайт – эксклюзив, а конкурентоспособность
                  Вашего бизнеса – вопрос нашей репутации.
                </p>
              </div>
              <button
                className={classes.formToggle}
                onClick={contactFormToggle}
              >
                <span>Напишите нам</span>
                <FontAwesomeIcon icon="long-arrow-alt-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toggle component={MainMenu} escape eventName="nav-toggle" />
      <Toggle component={ContactForm} escape eventName="contact-form" />
    </main>
  );
}

export default Main;
