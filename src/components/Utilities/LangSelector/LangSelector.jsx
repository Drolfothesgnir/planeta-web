import React from "react";
import { fetchLang } from "../../../Store/Language/actions";
import classes from "./LangSelector.module.less";
import { useLanguageState } from "../../../Store/Language/LanguageState";
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
  const [{ lang: stateLang }, dispatch] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${props.className || ""}`}>
      <ul>
        {availableLanguages.map(({ lang, label }) => {
          return (
            <li key={lang}>
              <a
                onClick={() => {
                  fetchLang(dispatch, lang === "uk" ? null : lang);
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
