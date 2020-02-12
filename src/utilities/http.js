import axios from "axios";

const defaultLang = "uk";

export const http = axios.create({
  baseURL: "http://back.planeta-web.co.ua/"
});

http.interceptors.request.use(config => {
  if (config.method.toLowerCase() === "get") {
    config.params = {
      ...config.params,
      _format: "json"
    };

    if (config.params.lang && config.params.lang !== defaultLang) {
      config.url = `/${config.params.lang + config.url}`;
    }
  }

  return config;
});
