import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainMenu from "./MainMenu/MainMenu";
import createContext from "../../utilities/createContext";

export const [Provider, useMenuState] = createContext(false);

function Layout(props) {
  return (
    <Provider>
      <Header useMenuState={useMenuState}/>
      <main className="main-content">
          {props.children}
          <MainMenu useMenuState={useMenuState}/>
      </main>
      <Footer />
    </Provider>
  );
}

export default Layout;
