import axios from "axios";

const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const $adminHost = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

const authInterceptor = (config) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

$adminHost.interceptors.request.use(authInterceptor);

export { $host, $adminHost };
