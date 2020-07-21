import React, { useState } from 'react'
import classes from './OrderButtonForm.module.less'
import ContactForm from '../ContactForm/ContactForm'

function OrderButtonForm() {
    const [animation, setAnimation] = useState(false);
    return (
        <div
            className={`${classes.formWrapper} ${
                animation ? classes.animationWrapper : ""
                }`}
        >
            <button
                className={`${classes.btn} btn btn-dark`}
                onClick={() => setAnimation(true)}
            >
                замовити проект
              </button>
            <div className={classes.containerForm}>
                <ContactForm
                    className={`${classes.form}`}
                    buttonClassname={"btn btn-dark"}
                />
            </div>
        </div>
    )
}

export default OrderButtonForm
