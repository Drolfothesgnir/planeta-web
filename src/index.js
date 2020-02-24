import "core-js/modules/es.promise";
import "core-js/modules/es.array.iterator";
import "core-js/modules/es.string.pad-start";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as LangProvider } from "./Context/language";
import ContentProvider from "./Store/Content/store";
import App from "./App";

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
