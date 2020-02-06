import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainMenu from "./MainMenu/MainMenu";
import Toggle from "../hoc/Toggle";

function Layout(props) {
  return (
    <>
      <Header />
      <main className="main-content">
          {props.children}
          <Toggle component={MainMenu} eventName="nav-toggle" />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
