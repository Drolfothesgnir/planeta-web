import React from "react";
import { useLanguageState, SET_LANG } from "../../../../Store/Language/LanguageState";
import classes from "./LangSelector.module.less";
const availableLanguages = [{
    lang: "ru",
    label: "ru"
}, {
    lang: 'uk',
    label: "ua"
}, {
    lang: "en",
    label: "en"
}];
function LangSelector(props) {
  const [state, dispatch] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${props.className}`}>
      <ul>
        {availableLanguages.map(({lang, label}) => {
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
