import React from "react";
import classes from "./Services.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import ContentPage from "../ContentPage/ContentPage";

const parser = (data) => {
  return data;
};

function Services() {
  const [links, error] = useFetchedContent({
    url: "/api/menu_items/services-menu",
    parser,
    name: "/services-menu",
  });
  if (error) {
    return error.message;
  }

  return (
    <ContentPage menuItem={"contact"} className={`slick-height`}>
      {links ? (
        <ul className={classes.tabList}>
          {links.map((data) => (
            <li key={data.key}>{data.title}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
    </ContentPage>
  );
}

export default Services;
