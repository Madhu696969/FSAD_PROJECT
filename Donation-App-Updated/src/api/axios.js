import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:8081",
    withCredentials: true,
});

// ✅ FIX: Attach JWT token to every request (was missing before)
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

// ✅ FIX: Auto-logout on 401/403
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            window.location.href = "/signin";
        }
        return Promise.reject(error);
    }
);

export default api;