import React, {useState} from 'react';
import classes from "./NavToggle.module.less";
import {navToggle} from "../../../../utilities/toggles";

function NavToggle(props) {
    const [toggled, toggleFunc] = useState(false);
    return (
        <div className={`${classes.navToggleContainer} ${props.className}`}>
            <button
                className={`${classes.navToggle} ${toggled ? classes.open : ""}`}
                onClick={e => {
                    navToggle(e);
                    toggleFunc(!toggled);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <span className={classes.menuStatus}>{toggled ? 'закрыть' : 'меню'}</span>
        </div>
    );
}

export default NavToggle;