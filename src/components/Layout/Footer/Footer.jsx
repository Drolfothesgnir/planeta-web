import React from 'react';
import Container from '../../UtilityComponents/Container';
import classes from './Footer.module.less';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <footer className={classes['footer']}>
      <Container>
        <div className={classes['footer-content']}>
          <a className="footer_phone" href="tel:+380 (93) 254 35 65">
            <FontAwesomeIcon icon="phone-alt" />
            <span>+380 (93) 254 35 65</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
