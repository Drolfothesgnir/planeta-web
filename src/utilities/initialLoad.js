import {http} from "./http";

export default () => {
  const languageMap = {
    en: "en",
    ru: "ru",
    "": "ua"
  };
  const { pathname } = location,
    path = pathname.split("/"),
    lang = languageMap[path[1]] || 'ua';

  http.get(pathname).then(console.log).catch(console.log)
};
