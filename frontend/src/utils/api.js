const API_BASE_URL = "http://localhost:3000";

function getAuthHeaders(includeToken = true) {
    const headers = { "Content-Type": "application/json" };
    if (includeToken) {
        const token = localStorage.getItem("token");
        if (token) {
            headers["Authorization"] = `Bearer ${token}`;
        }
    }
    return headers;
}

async function request(endpoint, options = {}) {
    const token = localStorage.getItem("token");
    
    const config = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && options.includeAuth !== false ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        throw new Error("Sesión expirada");
    }

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || data.message || "Error en la solicitud");
    }

    return data;
}

export const api = {
    get: (endpoint) => request(endpoint, { method: "GET" }),
    post: (endpoint, body) => request(endpoint, { method: "POST", body: JSON.stringify(body), includeAuth: false }),
    put: (endpoint, body) => request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
    delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};

export const authApi = {
    login: (credentials) => api.post("/auth/login", credentials),
    register: (userData) => api.post("/auth/register", userData),
};

export default api;
