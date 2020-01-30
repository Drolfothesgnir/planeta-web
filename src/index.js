import 'core-js';

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "./Store/Language/LanguageState";
import App from "./App";

const app = (
  <Router>
    <Provider>
      <App />
    </Provider>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
