import React from "react";
import { createStore } from "../../utilities/createStore";

const [StateProvider, _useLanguageState] = createStore();
const initialState = {
  lang: "ru",
  mainMenuToggle: {
    en: ['close', 'menu'],
    ru: ['закрыть', "меню"],
    uk: ['закрити', 'меню']
  },
  translations: {
    main: {
      body: null
    }
  }
};
export const SET_LANG = "SET_LANG";

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LANG:
      return { ...state, lang: payload.lang };
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
