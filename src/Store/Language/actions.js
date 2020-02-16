import { SET_LANG } from "./actionTypes";

export const fetchLang = (dispatch, lang) => {
  dispatch({ type: SET_LANG, payload: lang });
};
