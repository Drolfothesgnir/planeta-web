import "core-js/features/promise";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as LangProvider } from "./utilities/language";
import ContentProvider from './Store/Content/store';
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
