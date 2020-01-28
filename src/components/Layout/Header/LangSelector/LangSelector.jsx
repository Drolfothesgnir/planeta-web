import React from "react";
import {NavLink} from "react-router-dom";
import {fetchLang} from "../../../../Store/Language/actions";
import classes from "./LangSelector.module.less";
import {useLanguageState} from "../../../../Store/Language/LanguageState";
const availableLanguages = [{
    lang: "ru",
    label: "ru",
    path: 'ru'
}, {
    lang: 'uk',
    label: "ua",
    path: ''
}, {
    lang: "en",
    label: "en",
    path: 'en'
}];
function LangSelector(props) {
    const [, dispatch] = useLanguageState();
  return (
    <div className={`${classes.LangSelector} ${props.className}`}>
      <ul>
        {availableLanguages.map(({lang, label, path}) => {
          return (
            <li key={lang}>
                <NavLink onClick={() => {
                    fetchLang(dispatch, path || null)
                }} exact activeClassName={classes.active} to={{
                    pathname: '/'+path
                }}>
                    {label}
                </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default LangSelector;
