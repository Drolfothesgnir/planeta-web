import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import { Provider } from "./Store/Language/LanguageState";
import Spinner from "./components/Utilities/Spinner/Spinner";
import { http } from "./utilities/http";
import "./utilities/FontAwesomeLibrary";
import "./less/App.less";

// http://back.planeta-web.co.ua/node/1?_format=json
//http://back.planeta-web.co.ua/webform/call_back?_format=json

class App extends Component {
  state = {
    loading: true
  };

  componentDidMount() {
    http
      .get(`json.json`)
      .then((res) => {
        this.setState({
            loading: false,
            data: res.data
        });
          console.log(this.state)
      })
      .catch(console.log);
  }

  render() {
      const {loading, data} = this.state;
    return loading ? (
      <div className='app-placeholder'>
          <Spinner />
      </div>
    ) : (
      <Provider init={{
          lang: data.langcode[0].value,
          translations: {
              main: {
                  body: data.body[0].value,
                  button: data.field_button_text[0].value
              }
          }
      }}>
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
