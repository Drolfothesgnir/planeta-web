import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";

function Layout(props) {
  return (
    <>
      <Header />
      <main className="main-content">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
