import { FaBell, FaPalette, FaMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import InfoCard from "../UI/InfoCard";

function Settings() {
    const settings = [
        {
            key: "language",
            title: "Idioma",
            description: "Selecciona el idioma de la aplicación",
            type: "select",
            value: "Español",
            options: [
                { value: "Español", label: "Español" },
                { value: "Inglés", label: "Inglés" },
                { value: "Quechua", label: "Quechua" },
            ],
            icon: <FaPalette />,
        },
        {
            key: "theme",
            title: "Tema",
            description: "Activa el tema oscuro de la aplicación",
            type: "toggle",
            value: false,
            icon: <FaMoon />,
        },
        {
            key: "hourZone",
            title: "Zona Horaria",
            description: "Selecciona la zona horaria de la aplicación",
            type: "select",
            value: "GMT-5",
            options: [
                { value: "GMT-5", label: "GMT-5" },
                { value: "GMT-6", label: "GMT-6" },
                { value: "GMT-7", label: "GMT-7" },
            ],
            icon: <FaPalette />,
        },
    ];

    return (
        <InfoCard
            title={
                <div className="info-card-header-custom">
                    <IoMdSettings className="info-card-icon" />
                    <span className="info-card-title-text">
                        Preferencias del Sistema
                    </span>
                </div>
            }
            description="Personaliza la apariencia y configuración regional"
            variant="settings"
            settingsItems={settings}
        />
    );
}

export default Settings;
