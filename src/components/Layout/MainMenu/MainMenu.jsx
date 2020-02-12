import React from "react";
import { Link } from "react-router-dom";
import { useLanguageState } from "../../../Store/Language/LanguageState";
import { navToggle } from "../../../utilities/toggles";
import LangSelector from "../../Utilities/LangSelector/LangSelector";
import { http } from "../../../utilities/http";
import storage from "../../../utilities/storage";
import classes from "./MainMenu.module.less";

function MainMenu(props) {
  const [{ lang }] = useLanguageState();
  const [content, setContent] = React.useState(
    storage.getItem("__mainMenu") || {}
  );
  React.useEffect(() => {
    if (!content[lang]) {
      http
        .get("/api/menu_items/main", { params: { lang } })
        .then(({ data }) => {
          const newContent = { ...content, [lang]: data };
          storage.setItem("__mainMenu", newContent);
          setContent(newContent);
        });
    }
  }, [lang, content]);
  const links = content[lang];
  return (
    <nav
      className={`${classes.mainMenu} ${
        props.isToggled ? classes.open : ""
      } overlay`}
    >
      <ul className={`${classes.mainMenuLinks}`}>
        {links
          ? links.map(({ title, relative, key }) => {
              return (
                <li key={key} className={`${classes.navLink}`}>
                  <Link to={relative} onClick={navToggle}>
                    <span className="glitch" data-text={title}>
                      {title}
                    </span>
                  </Link>
                </li>
              );
            })
          : "Loading..."}
      </ul>
      <LangSelector
        className={classes.langSelector}
        activeClassName={classes.activeLang}
      />
    </nav>
  );
}
export default MainMenu;
