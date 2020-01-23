import React from "react";
import { createStore } from "../../utilities/createStore";

const state = createStore();
const StateProvider = state[0];
const initialState = {
  lang: "ru",
    translations: {

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
export const Provider = ({ children, init }) => {
  return (
    <StateProvider initialState={init || initialState} reducer={reducer}>
      {children}
    </StateProvider>
  );
};

export const useLanguageState = state[1];
