import { http } from "../../utilities/http";
import { SET_LANG, SET_ERROR } from "./actionTypes";
import parseLanguageData from "../../utilities/parseLanguageData";

function response(res) {
  return res.data;
}

const parseFormData = data => {
  const typeMap = {
    email: "email",
    textfield: "text",
    webform_actions: "submit",
    tel: "tel"
  };

  const result = {};
  const dataArr = Object.entries(data);
  const submit = dataArr.findIndex(
    ([, item]) => item["#type"] === "webform_actions"
  );
  result.submit = dataArr[submit][1][["#title"]];
  dataArr.splice(submit, 1);
  result.fields = dataArr.map(([name, item]) => {
    return {
      name,
      title: item["#title"],
      type: typeMap[item["#type"]]
    };
  });
  return result;
};

export const fetchLang = (dispatch, lang) => {
  const config = lang ? { params: { lang } } : null;
  Promise.all([
    http.get("/", config).then(response),
    // http.get("/api/menu_items/main", config).then(response),
    http.get("/webform/call_back/get", config).then(response)
  ])
    .then(([langData, /* mainMenu, */ formConfig]) => {
      const data = parseLanguageData(langData);
      // data.translations.main_menu = mainMenu;
      data.translations.form = parseFormData(formConfig.elements);
      data.translations.thankYou = {
        text: formConfig.settings.confirmation_title,
        button: formConfig.settings.confirmation_back_label
      };
      dispatch({ type: SET_LANG, payload: data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: SET_ERROR, payload: err });
    });
};
