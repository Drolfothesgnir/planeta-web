import React from 'react';
import FormItem from "./FormItem/FormItem";

const formItems = [
    {
        label: 'Имя',
        name:'name'
    },
    {
        label: 'ТЕЛЕФОН',
        name: 'tel'
    },
    {
        label: 'e-mail',
        name: 'mail'
    },
    {
        label: 'сообщение',
        name: 'message'
    }
];

function ContactForm(props) {
    return (
        <div className={'overlay'}>
            <form action="">
                {formItems.map(item => {
                    const [value, setValue] = React.useState(item.value);
                    const changeHandler = event => setValue(e.target.value);
                    return <FormItem value={value} label={item.label} change={changeHandler} />
                })}
            </form>
        </div>
    );
}

export default ContactForm;