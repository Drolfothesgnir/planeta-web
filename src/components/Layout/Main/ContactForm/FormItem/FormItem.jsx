import React from 'react';

function FormItem(props) {
    return (
        <fieldset className={`form-item`}>
            <label htmlFor="">{props.label}</label>
            <input type={props.type || 'text'} value={props.value || ''} onChange={props.change}/>
        </fieldset>
    );
}

export default FormItem;