import React from 'react';
import classes from './Spinner.module.less';

function Spinner() {
    return (
        <div className={classes.loader}>Loading...</div>
    );
}

export default Spinner;