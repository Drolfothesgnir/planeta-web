import { hot } from "react-hot-loader/root";
import React from "react";
import Layout from "./components/Layout/Layout";
import Routes from "./components/Utilities/Routes/Routes";
import "./utilities/FontAwesomeLibrary";
import "./less/App.less";

// http://back.planeta-web.co.ua/node/1?_format=json
// http://back.planeta-web.co.ua/webform/call_back?_format=json
// http://back.planeta-web.co.ua/api/menu_items/main
// http://back.planeta-web.co.ua/webform/call_back/get
// /webform_rest/submit
// http://back.planeta-web.co.ua/portfolio
// http://back.planeta-web.co.ua/block-layout?_format=json&path=/portfolio

function App() {
  return (
    <Layout>
      <Routes />
    </Layout>
  );
}

export default hot(App);
