import React from "react";
import { useLanguageState, SET_LANG } from "../../../../Store/Language/LanguageState";
import classes from "./LangSelector.module.less";
const availableLanguages = ["ru", "ua", "en"];
function LangSelector(props) {
  const [state, dispatch] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${props.className}`}>
      <ul>
        {availableLanguages.map(lang => {
          return (
            <li key={lang}>
              <a
                href={`#${lang}`}
                className={`${lang === state.lang ? classes.active : ""}`}
                onClick={e => {
                  e.preventDefault();
                  dispatch({ type: SET_LANG, payload: { lang } });
                }}
              >
                {lang}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LangSelector;
