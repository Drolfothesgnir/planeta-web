import React from 'react';
import classes from './Footer.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className={classes.footer}>
      <div  className='container'>
        <div className={classes.footerContent}>
          <a className="footer_phone" href="tel:+380 (93) 254 35 65">
            <FontAwesomeIcon icon="phone-alt" />
            <span>+380 (93) 254 35 65</span>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
