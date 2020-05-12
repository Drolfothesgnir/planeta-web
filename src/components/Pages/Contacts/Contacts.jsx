import React from "react";
import classes from "./Contacts.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import ContentPage from "../ContentPage/ContentPage";

const parser = (data) => {
  data = data.content.main_page_content.entity;
  console.log(data.field_service_departament[0].field_email[0].value);
  return {
    salesEmail: data.field_service_departament[0].field_email[0].value,
  };
};

function Contacts(props) {
  const [text, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    name: "/contact",
    parser,
  });
  if (error) {
    return error.message;
  }

  return (
    <ContentPage menuItem={"about"} className={`slick-height`}>
      <div className={classes.bg}>
        {text ? <p>{text.salesEmail}</p> : <></>}
      </div>
    </ContentPage>
  );
}

export default Contacts;
