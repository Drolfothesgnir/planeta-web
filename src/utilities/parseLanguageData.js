const parserMap = {
  front_page: data => ({
    front_page: {
      body: data.body[0].value,
      button: data.field_button_text[0].value
    }
  })
};

export default data => {
  return {
    lang: data.langcode[0].value,
    translations: parserMap[data.type[0].target_id](data)
  };
};
