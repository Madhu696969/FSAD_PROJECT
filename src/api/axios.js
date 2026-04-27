import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8081",
    withCredentials: true,
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    const user = JSON.parse(localStorage.getItem("user") || "{}");
    if (user?.userId !== undefined) {
        config.headers["X-User-Id"] = user.userId;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        const url = error.config?.url || "";

        // ✅ Don't redirect on auth routes — let the component handle the error
        const isAuthRoute = url.includes("/auth/");

        if (!isAuthRoute &&
            (error.response?.status === 401 || error.response?.status === 403)) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/signin";
        }

        return Promise.reject(error);
    }
);

export default api;