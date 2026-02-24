import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute() {
    const [authorized, setAuthorized] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setAuthorized(false);
            return;
        }

        fetch("http://localhost:3000/users/me", {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
            .then((res) => {
                if (!res.ok) throw new Error();
                return res.json();
            })
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
