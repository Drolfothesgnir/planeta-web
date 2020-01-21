import React from "react";
import FormItem from "./FormItem/FormItem";
import classes from "./ContactForm.module.less";

const formItems = [
  {
    label: "Имя",
    name: "name"
  },
  {
    label: "ТЕЛЕФОН",
    name: "tel"
  },
  {
    label: "e-mail",
    name: "mail"
  },
  {
    label: "сообщение",
    name: "message"
  }
];

function getStateFromFormFields(formFields) {
  const formData = {};
  formFields.forEach(field => {
    formData[field.name] = {
      value: field.value,
      focused: field.focused
    };
  });
  return formData;
}

class ContactForm extends React.Component {
    state = getStateFromFormFields(formItems);

    changeHandler = ({target}) => {
        this.setState({[target.name]:target.value})
    }

    render() {
        return null
    }
}
// function ContactForm() {
//   const [formData, setFormData] = React.useState(initFormData),
//     changeHandler = ({ target }) =>{
//         console.log(target.value)
//         setFormData(data => ({ ...data, [target.name]: target.value }))
//     }
//       ,
//    submitHandler = event => {
//         event.preventDefault();
//         console.log(formData);
//     };
//   return (
//     <div className={`${classes.contactForm} overlay`}>
//       <form action="">
//         {formItems.map(item => {
//           return (
//             <FormItem
//               name={item.name}
//               value={formData[item.name].value}
//               label={item.label}
//               change={changeHandler}
//               key={item.name}
//             />
//           );
//         })}
//         <button>Click</button>
//       </form>
//     </div>
//   );
// }

export default ContactForm;
