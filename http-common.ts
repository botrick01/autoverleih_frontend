import axios from "axios";

const http = axios.create({
    baseURL: "http://localhost:5137",
    headers: {
        "Content-Type": "application/json"
    }
})

http.interceptors.request.use(
    (config) => {
        if (config.url !== "/api/Auth/login" && config.url !== "/api/Auth/Token") {
            const token = localStorage.getItem("accessToken")
            if (token) {
                config.headers!["Authorization"] = "Bearer " + token;
            }
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default http;