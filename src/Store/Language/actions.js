import { http } from "../../utilities/http";
import { SET_LANG, SET_ERROR } from "./actionTypes";

import parseLanguageData from "../../utilities/parseLanguageData";

export const fetchLang = (dispatch, lang) => {
  Promise.all([
    http.get("/" + (lang || "")).then(({ data }) => data),
    http.get((lang ? '/'+lang : '') + "/api/menu_items/main").then(({ data }) => data)
  ])
    .then(([langData, mainMenu]) => {
      const data = parseLanguageData(langData);
      data.translations.main_menu = mainMenu;
      dispatch({ type: SET_LANG, payload: data });
    })
    .catch(err => dispatch({ type: SET_ERROR, payload: err }));
};
