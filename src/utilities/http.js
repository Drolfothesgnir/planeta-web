import axios from "axios";

export const http = axios.create({
    baseURL: "http://localhost:3000/",
});

http.interceptors.request.use(config => {
    config.params = {
        ...config.params,
        _format: 'json'
    };
    return config;
});
