export default function (data) {
  data = data.content.main_page_content.entity;
  const result = [];

  const firstSlide = {
    title: data.title[0].value,
    content: data.field_description_slide
        .slice(0, 3)
        .map(({ field_description, field_title }) => ({
          title: field_title[0].value,
          text: field_description[0].value
        })),
    link: {
      url: data.field_sitelinks[0].uri,
      text: data.field_sitelinks[0].title
    }
  };

  function getData(item) {
    return {
      title: item.field_title[0].value,
      content: {
        description: item.field_description[0].value,
        pictures: item.field_picture.map(({ uri: [{ url }] }, i) => ({
          url,
          description: (item.field_description_of_the_picture[i] || {}).value
        }))
      }
    };
  }

  result.push(firstSlide);

  return result.concat(data.field_description_slide.slice(3).map(getData));
}