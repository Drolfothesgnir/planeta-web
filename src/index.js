import "core-js";

import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { Provider as StoreProvider } from "react-redux";
import reducer from "./Store/Content/reducer";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as LangProvider } from "./Store/Language/LanguageState";
import App from "./App";

const store = createStore(reducer, applyMiddleware(thunk));

const app = (
  <Router>
    <StoreProvider store={store}>
      <LangProvider>
        <App />
      </LangProvider>
    </StoreProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
