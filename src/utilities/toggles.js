import {createDispatcher} from "./CustomEventOperator";

export const navToggle = createDispatcher('nav-toggle'),
            contactFormToggle = createDispatcher('contact-form');