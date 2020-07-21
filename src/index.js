import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.string.pad-start";
import "core-js/modules/web.url";
import "core-js/modules/web.url-search-params";
import "animate.css/animate.css";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as LangProvider } from "./Context/language";
import ContentProvider from "./Store/Content/store";
import App from "./App";


/* eslint-disable */
if (localStorage.getItem('CACHE_VERSION') !== CACHE_VERSION) {
  localStorage.clear();
  localStorage.setItem('CACHE_VERSION', CACHE_VERSION);
}
/* eslint-enable */

const app = (
  <Router>
    <ContentProvider>
      <LangProvider>
        <App />
      </LangProvider>
    </ContentProvider>
  </Router>
);

ReactDOM.render(app, document.getElementById("root"));
