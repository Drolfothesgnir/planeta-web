import React from "react";
import { SET_FORM_SUBMISSION_FLAG, SET_LANG } from "./actionTypes";
import { createStore } from "../../utilities/createStore";

const [StateProvider, _useLanguageState] = createStore();
const initialState = {
  lang: "ru",
  contactForm: false
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case SET_LANG:
      return { ...state, lang: payload };
    case SET_FORM_SUBMISSION_FLAG:
      return {
        ...state,
        contactForm: payload
      };
    default:
      return state;
  }
};
export const Provider = ({ children, init = {} }) => {
  return (
    <StateProvider
      initialState={{ ...initialState, ...init }}
      reducer={reducer}
    >
      {children}
    </StateProvider>
  );
};

export const useLanguageState = _useLanguageState;
