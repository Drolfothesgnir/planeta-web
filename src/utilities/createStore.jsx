import React, { createContext, useContext, useReducer } from "react";


export const createStore = () => {
  const context = createContext();
        const Provider = ({children, reducer, initialState}) => {
          return (
              <context.Provider value={useReducer(reducer, initialState)}>
                {children}
              </context.Provider>
          );
        };
   const useState = () => useContext(context);

   return [Provider, useState];
};