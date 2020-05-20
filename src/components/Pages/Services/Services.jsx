import React, { useState } from "react";
import classes from "./Services.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import ContentPage from "../ContentPage/ContentPage";
import Slide from "./Slide/Slide";

function Services() {
  const [active, setActive] = useState(0);
  const [isOpen, setOpen] = useState(false);

  const [links, error] = useFetchedContent({
    url: "/api/menu_items/services-menu",
    name: "/services-menu",
  });
  if (error) {
    return error.message;
  }

  return (
    <div className={classes.wrapper}>
      <ContentPage
        menuItem={"contact"}
        className={`slick-height`}
        links={links && links}
        onLinkClickFunc={setActive}
        active={active}
      >
        {links ? (
          <div className={classes.container}>
            <ul className={`${classes.nav} ${isOpen && classes.open}`}>
              {links.map((data, index) => (
                <li
                  key={data.key}
                  className={`${index === active && classes.top} ${
                    classes.link
                  }`}
                >
                  <button
                    onClick={() => {
                      setActive(index);
                      setOpen(!isOpen);
                    }}
                  >
                    {data.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  className={`${classes.btn} ${isOpen && classes.activeBtn}`}
                  onClick={() => setOpen(!isOpen)}
                ></button>
              </li>
            </ul>

            <Slide active={active} />
          </div>
        ) : (
          <></>
        )}
      </ContentPage>
    </div>
  );
}

export default Services;
