import { hot } from "react-hot-loader/root";
import React  from "react";
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import {useLanguageState} from "./Store/Language/LanguageState";
import {fetchLang} from "./Store/Language/actions";
import Spinner from "./components/Utilities/Spinner/Spinner";
import "./utilities/FontAwesomeLibrary";
import "./less/App.less";

// http://back.planeta-web.co.ua/node/1?_format=json
//http://back.planeta-web.co.ua/webform/call_back?_format=json


function App() {
    const [{loading}, dispatch ] = useLanguageState();
    React.useEffect(() => {
        fetchLang(dispatch)
    }, [])
    return loading ? (
        <div className='app-placeholder'>
            <Spinner />
        </div>
    ) : (
        <div className="App">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default hot(App);
