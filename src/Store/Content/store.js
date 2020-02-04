import React, { createContext, useContext, useReducer } from "react";

import reducer, { init } from "./reducer";

const context = createContext(null);

export default ({ children }) => {
  const [state, _dispatch] = useReducer(reducer, init);
  const dispatch = action => typeof action === 'function' ? action(_dispatch) : _dispatch(action);

  return <context.Provider value={[state, dispatch]}>{children}</context.Provider>;
};

export const useState = () => useContext(context);