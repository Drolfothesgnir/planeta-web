import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import {fetchContent} from "../../Store/Content/actions";
import { useSelector, useDispatch } from "react-redux";

const selector = data => data;

function Layout(props) {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(fetchContent({
            url: '/api/menu_items/main',
            parser: data => data,
            name: 'layout',
            lang: 'ua'
        }))
    }, [])

  const state = useSelector(selector);
    console.log(state, 'state')
  return (
    <>
      <Header />

      <main className="main-content">{props.children}</main>
      <Footer />
    </>
  );
}

export default Layout;
