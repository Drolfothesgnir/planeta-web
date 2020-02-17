import axios from "axios";
import { DEFAULT_LANG } from "./language";

const http = axios.create({
  baseURL: "http://back.planeta-web.co.ua/"
});

http.interceptors.request.use(config => {
  if (config.method.toLowerCase() === "get") {
    config.params = {
      ...config.params,
      _format: "json"
    };

    if (config.params.lang && config.params.lang !== DEFAULT_LANG) {
      config.url = `/${config.params.lang + config.url}`;
    }
  }

  return config;
});

export default http;
