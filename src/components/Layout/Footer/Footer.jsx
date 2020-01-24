import React from "react";
import classes from "./Footer.module.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footerContent}>
          <div className={classes.link}>
            <a className="footer_phone" href="tel:+380 (93) 254 35 65">
              <FontAwesomeIcon icon="phone-alt" />
              <span>+380 (93) 254 35 65</span>
            </a>
          </div>
          <div className={classes.link}>
            <a href="mailto:order@planeta-web.com.ua" className="footer_mail">
              <FontAwesomeIcon icon="envelope" />
              <span>order@planeta-web.com.ua</span>
            </a>
          </div>
          <div className="copyright">
            &copy; 2006-{new Date().getFullYear()}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
