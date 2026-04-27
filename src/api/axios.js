import axios from "axios";

// ✅ Use deployed backend URL
const api = axios.create({
    baseURL: "https://fsad-project-backend-1-lzpc.onrender.com",
    withCredentials: true,
});

// ✅ Request Interceptor (Attach Token)
api.interceptors.request.use((config) => {

    const token = localStorage.getItem("token");

    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    // Attach User ID if available
    const user = JSON.parse(localStorage.getItem("user") || "{}");

    if (user?.userId !== undefined) {
        config.headers["X-User-Id"] = user.userId;
    }

    return config;
});


// ✅ Response Interceptor (Handle Unauthorized)
api.interceptors.response.use(

    (response) => response,

    (error) => {

        const url = error.config?.url || "";

        // Don't redirect on auth routes
        const isAuthRoute = url.includes("/auth/");

        if (
            !isAuthRoute &&
            (error.response?.status === 401 ||
             error.response?.status === 403)
        ) {

            localStorage.removeItem("token");
            localStorage.removeItem("user");

            window.location.href = "/signin";
        }

        return Promise.reject(error);
    }
);

export default api;
