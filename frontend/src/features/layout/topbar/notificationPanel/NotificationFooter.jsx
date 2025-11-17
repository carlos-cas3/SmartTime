import { useNavigate } from "react-router-dom";

export default function NotificationFooter() {
    const navigate = useNavigate();

    return (
        <div className="np-footer" onClick={() => navigate("/notificaciones")}>
            Configuración de Notificaciones
        </div>
    );
}
