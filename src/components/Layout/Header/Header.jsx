import React, { useState } from 'react';
import Logo from "../../Logo/Logo";
import {navToggle} from "../../../utilities/toggles";
import classes from './Header.module.less';

function Header() {
    const [toggled, toggleFunc] = useState(false);
    return (
        <header>
           <div className='container'>
               <div className={classes.headerContent}>
                <Logo/>
                <div className={classes.navToggleContainer}>
                    <button className={`${classes.navToggle} ${toggled ? classes.open : ''}`} onClick={e => {
                        navToggle(e);
                        toggleFunc(!toggled);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
               </div>
           </div>
        </header>
    );
}

export default Header;