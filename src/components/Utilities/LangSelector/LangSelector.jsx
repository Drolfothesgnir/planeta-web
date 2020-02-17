import React from "react";
import classes from "./LangSelector.module.less";
import { useLanguageState } from "../../../utilities/language";
const availableLanguages = [
  {
    lang: "ru",
    label: "ru"
  },
  {
    lang: "uk",
    label: "ua"
  },
  {
    lang: "en",
    label: "en"
  }
];
function LangSelector(props) {
  const [stateLang, setLang] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${props.className || ""}`}>
      <ul>
        {availableLanguages.map(({ lang, label }) => {
          return (
            <li key={lang}>
              <a
                onClick={() => {
                  setLang(lang);
                }}
                className={
                  lang === stateLang
                    ? props.activeClassName || classes.active
                    : ""
                }
              >
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LangSelector;
