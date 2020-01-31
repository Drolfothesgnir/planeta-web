import axios from "axios";

export const http = axios.create({
    baseURL: "http://back.planeta-web.co.ua/",
});

http.interceptors.request.use(config => {
    if (config.method.toLowerCase() === 'get') {
        config.params = {
            ...config.params,
            _format: 'json'
        };
    }
    return config;
});
