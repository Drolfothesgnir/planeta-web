import {hot} from 'react-hot-loader/root'
import React, {Component} from 'react';
import Header from "./components/Layout/Header/Header";
import Main from "./components/Layout/Main/Main";
import Footer from "./components/Layout/Footer/Footer";
import './utilities/FontAwesomeLibrary';
import './less/App.less'

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        );
    }
}

export default hot(App);
