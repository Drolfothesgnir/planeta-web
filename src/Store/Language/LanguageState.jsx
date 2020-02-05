import React from "react";
import {SET_ERROR, SET_FORM_SUBMISSION_FLAG, SET_LANG, START_LOADING} from "./actionTypes";
import { createStore } from "../../utilities/createStore";

const [StateProvider, _useLanguageState] = createStore();
const initialState = {
  lang: "ru",
  loading: true,
  contactForm: false,
  mainMenuToggle: {
    en: ['close', 'menu'],
    ru: ['закрыть', "меню"],
    uk: ['закрити', 'меню']
  },
  translations: {
    main_menu: {

    }
  }
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case START_LOADING:
      return {...state, loading: true}

    case SET_LANG:
      return { ...state, lang: payload.lang, translations: payload.translations, loading: false };
    case SET_ERROR:
      return {...state, error: payload, loading: false};
    case SET_FORM_SUBMISSION_FLAG:
      return {
        ...state,
        contactForm: payload
      }
    default:
      return state;
  }
};
export const Provider = ({ children, init = {} }) => {
  return (
    <StateProvider initialState={{...initialState, ...init}} reducer={reducer}>
      {children}
    </StateProvider>
  );
};

export const useLanguageState = _useLanguageState;
