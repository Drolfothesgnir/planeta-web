import React from "react";
import classes from "./Slide.module.less";
import useFetchedContent from "../../../../utilities/useFetchedContent";
import Slider from "../../../Utilities/HorizontalSlider/HorizontalSlider";

const parser = (data) => {
  return data;
};

const Slide = ({ index, active }) => {
  // зараз статично, так як бек не наповнений але в майбуньому має витягувутись url для запроса по конкретній сторінці
  const [data, error] = useFetchedContent({
    url: "block-layout?path=/uslugi",
    parser,
    name: "/uslugi/" + index,
  });
  if (error) {
    return error.message;
  }

  console.log(data);

  return (
    <div className={`${classes.slideWrapper} ${active && classes.active} `}>
      {data && (
        <Slider titles={data.content.main_page_content.entity.field_slider}>
          {data.content.main_page_content.entity.field_slider.map((data) => {
            console.log(data);
            return [
              <div key={data.id[0]} className={classes.contentWrapper}>
                <h2>{data.field_title[0].value}</h2>
                <p>{data.field_description[0].processed}</p>
              </div>,
            ];
          })}
        </Slider>
      )}
    </div>
  );
};

export default Slide;
