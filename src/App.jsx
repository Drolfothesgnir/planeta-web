import { hot } from "react-hot-loader/root";
import React from "react";
import Layout from "./components/Layout/Layout";
import { useLanguageState } from "./Store/Language/LanguageState";
import { fetchLang } from "./Store/Language/actions";
import Spinner from "./components/Utilities/Spinner/Spinner";
import Routes from "./components/Utilities/Routes/Routes";
import "./utilities/FontAwesomeLibrary";
import "./less/App.less";

// http://back.planeta-web.co.ua/node/1?_format=json
//http://back.planeta-web.co.ua/webform/call_back?_format=json
//http://back.planeta-web.co.ua/api/menu_items/main
//http://back.planeta-web.co.ua/webform_rest/call_back/fields
///webform_rest/submit

const path = location.pathname.split("/")[1];

function App() {
  const [{ loading }, dispatch] = useLanguageState();

  React.useEffect(() => {
    fetchLang(dispatch, path.length === 2 ? path : "");
  }, []);
  return loading ? (
    <div className="app-placeholder">
      <Spinner />
    </div>
  ) : (
    <div className="App">
      <Layout>
        <Routes />
      </Layout>
    </div>
  );
}

export default hot(App);
