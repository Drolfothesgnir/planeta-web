import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import { Provider } from "./Store/Language/LanguageState";
import "./utilities/FontAwesomeLibrary";
import "./less/App.less";

// http://back.planeta-web.co.ua/node/1?_format=json
//http://back.planeta-web.co.ua/webform/call_back?_format=json

class App extends Component {
  render() {
    return (
      <Provider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default hot(App);
