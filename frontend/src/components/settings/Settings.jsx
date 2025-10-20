import { FaBell, FaPalette } from "react-icons/fa";
import InfoCard from "../UI/InfoCard";

function Settings() {
    const settings = [
        {
            key: "notifications",
            title: "Notificaciones",
            description: "Activa o desactiva las alertas por correo",
            type: "toggle",
            value: true,
            icon: <FaBell />,
        },
        {
            key: "theme",
            title: "Tema",
            description: "Selecciona el color del panel",
            type: "select",
            value: "light",
            options: [
                { value: "light", label: "Claro" },
                { value: "dark", label: "Oscuro" },
            ],
            icon: <FaPalette />,
        },
    ];

    return (
        <InfoCard
            title="Configuraciones"
            variant="settings"
            settingsItems={settings}
        />
    );
}

export default Settings;
