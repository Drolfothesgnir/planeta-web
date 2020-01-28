import {http} from "../../utilities/http";
import { SET_LANG, SET_ERROR } from "./actionTypes";

import parseLanguageData from "../../utilities/parseLanguageData";


export const fetchLang = (dispatch, lang) => {

    console.log(lang)

    http.get('/'+(lang||'')).then(res => {
        const data = parseLanguageData(res.data);
        dispatch({type: SET_LANG, payload: data});
    }).catch(err => {
        dispatch({type: SET_ERROR, payload: err})
    })
};
