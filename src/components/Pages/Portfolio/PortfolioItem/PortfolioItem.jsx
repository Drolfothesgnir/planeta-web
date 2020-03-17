import React from "react";
import useFetchedContent from "../../../../utilities/useFetchedContent";

function parser(data) {
  const result = [];

  const firstSlide = {
    title: data.title[0].value,
    content: data.field_description_slide
      .slice(0, 3)
      .map(({ field_description, field_title }) => ({
        title: field_title[0].value,
        text: field_description[0].value
      }))
  };

  function getData(item) {
    return {
      title: item.field_title[0].value,
      content: {
        description: item.field_description[0].value,
        pictures: item.field_description_of_the_picture.map(
          ({ value: description }, i) => ({
            description,
            url: item.field_picture[i].uri[0].url
          })
        )
      }
    };
  }

  result.push(firstSlide);

  return result.concat(data.field_description_slide.slice(3).map(getData));
}

function PortfolioItem(props) {
  const [content, error] = useFetchedContent({
    url: props.match.url,
    parser,
    name: "portfolio:" + props.match.params.path,
    expires: 0
  });
  console.log(content);
  return (
    <div>
      <h1>{props.match.params.path}</h1>
    </div>
  );
}

export default PortfolioItem;
