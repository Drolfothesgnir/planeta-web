import React, { useState } from 'react';
import Container from "../../UtilityComponents/Container";
import Logo from "../../Logo/Logo";
import { createDispatcher } from "../../../utilities/CustomEventOperator";
import classes from './Header.module.less';

const navBarToggle = createDispatcher('nav-toggle');

function Header() {
    const [toggled, toggleFunc] = useState(false);
    return (
        <header>
           <Container>
               <div className={classes["header-content"]}>
                <Logo/>
                <div className={classes["nav-toggle-container"]}>
                    <button className={[classes['nav-toggle'], toggled ? classes.open : ''].join(' ')} onClick={e => {
                        navBarToggle(e);
                        toggleFunc(!toggled);
                    }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
               </div>
           </Container>
        </header>
    );
}

export default Header;