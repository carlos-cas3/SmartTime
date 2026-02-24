import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

export default function ProtectedRoute() {
    const [authorized, setAuthorized] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setAuthorized(false);
            return;
        }

        api.get("/users/me")
            .then(() => setAuthorized(true))
            .catch(() => {
                localStorage.clear();
                setAuthorized(false);
            });
    }, []);

    if (authorized === null) return <p>Cargando...</p>;

    if (!authorized) return <Navigate to="/login" replace />;

    return <Outlet />;
}
