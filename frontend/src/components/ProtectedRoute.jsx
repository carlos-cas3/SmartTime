import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

export default function ProtectedRoute() {
    const [authorized, setAuthorized] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const checkAuth = async () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setAuthorized(false);
                return;
            }

            try {
                await api.get("/users/me");
                setAuthorized(true);
            } catch {
                localStorage.clear();
                setAuthorized(false);
            }
        };

        checkAuth();

    }, [location.key]);

    if (authorized === null) {
        return <p>Verificando sesión...</p>;
    }

    if (!authorized) {
        return <Navigate to="/login" replace />;
    }

    return <Outlet />;
}