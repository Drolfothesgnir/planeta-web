import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainMenu from "./MainMenu/MainMenu";
import { Provider } from "./menuContext";

function Layout(props) {
  return (
    <Provider>
      <Header />
      <main className="main-content">
        {props.children}
        <MainMenu />
      </main>
      <Footer />
    </Provider>
  );
}

export default Layout;
