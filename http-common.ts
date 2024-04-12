import axios from "axios";
import { useRouter } from "next/navigation";


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

http.interceptors.response.use(
    (res) => {
        return res;
    },
    async (err) => {
        if (err.response.status == 401) {
            window.location.href = window.location.origin + "/login";
            return Promise.reject();
        }
        return err
    }
)

export default http;