const API_BASE_URL = "http://localhost:3000";

async function request(endpoint, options = {}, includeAuth = true) {
    const token = localStorage.getItem("token");
    
    const config = {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && includeAuth ? { Authorization: `Bearer ${token}` } : {}),
            ...options.headers,
        },
    };

    const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
    
    if (response.status === 401) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
        throw new Error("SesiÃ³n expirada");
    }

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data.error || data.message || "Error en la solicitud");
    }

    return data;
}

export const api = {
    get: (endpoint) => request(endpoint, { method: "GET" }),
    post: (endpoint, body, includeAuth = true) => request(endpoint, { method: "POST", body: JSON.stringify(body) }, includeAuth),
    put: (endpoint, body) => request(endpoint, { method: "PUT", body: JSON.stringify(body) }),
    delete: (endpoint) => request(endpoint, { method: "DELETE" }),
};

export const tasksApi = {
    getAll: () => api.get("/tasks"),
    getById: (id) => api.get(`/tasks/${id}`),
    create: (data) => api.post("/tasks", data),
    update: (id, data) => api.put(`/tasks/${id}`, data),
    delete: (id) => api.delete(`/tasks/${id}`),
};

export const projectsApi = {
    getAll: () => api.get("/projects"),
    getById: (id) => api.get(`/projects/${id}`),
    create: (data) => api.post("/projects", data),
    update: (id, data) => api.put(`/projects/${id}`, data),
    delete: (id) => api.delete(`/projects/${id}`),
};

export const examsApi = {
    getAll: () => api.get("/exams"),
    getById: (id) => api.get(`/exams/${id}`),
    create: (data) => api.post("/exams", data),
    update: (id, data) => api.put(`/exams/${id}`, data),
    delete: (id) => api.delete(`/exams/${id}`),
};

export const extrasApi = {
    getAll: () => api.get("/extras"),
    getById: (id) => api.get(`/extras/${id}`),
    create: (data) => api.post("/extras", data),
    update: (id, data) => api.put(`/extras/${id}`, data),
    delete: (id) => api.delete(`/extras/${id}`),
};

export const eventsApi = {
    getAll: () => api.get("/events"),
    getById: (id) => api.get(`/events/${id}`),
    create: (data) => api.post("/events", data),
    update: (id, data) => api.put(`/events/${id}`, data),
    delete: (id) => api.delete(`/events/${id}`),
};

export const notificationsApi = {
    getAll: () => api.get("/notifications"),
    markAsRead: (id) => api.put(`/notifications/${id}/read`),
    markAllAsRead: () => api.put("/notifications/read-all"),
    delete: (id) => api.delete(`/notifications/${id}`),
};

export const authApi = {
    login: (credentials) => api.post("/auth/login", credentials, false),
    register: (userData) => api.post("/auth/register", userData, false),
};

export const userApi = {
    getProfile: () => api.get("/users/me"),
    updateProfile: (data) => api.put("/users/me", data),
};

export default api;
