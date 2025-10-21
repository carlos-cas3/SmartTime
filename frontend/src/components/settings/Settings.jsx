import { useState } from "react";
import { FaPalette, FaMoon } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { IoLanguage } from "react-icons/io5";
import {
    MdSystemSecurityUpdateWarning,
    MdOutlineSecurity,
} from "react-icons/md";

import InfoCard from "../UI/InfoCard";
import "./Settings.css";
import ProfileCard from "../UI/Profilecard";

import { useNavigate } from "react-router-dom";

function Settings() {
    const navigate = useNavigate(); 
    
    // Preferencias del sistema
    const [preferences, setPreferences] = useState({
        language: "Español",
        theme: false,
        hourZone: "GMT-5",
    });

    // Usuaruio cambia algo (toggle, select, etc.)
    const handleSettingChange = (key, value) => {
        setPreferences((prev) => ({
            ...prev,
            [key]: value,
        }));
    };

    // Usuario hace clic en "Guardar cambios"
    const handleSave = () => {
        console.log("Preferencias guardadas:", preferences);
        alert("Preferencias guardadas correctamente ✅");
    };

    // Configuración de items del sistema
    const settingsSystem = [
        {
            key: "language",
            title: "Idioma",
            description: "Selecciona el idioma de la aplicación",
            type: "select",
            value: preferences.language,
            options: [
                { value: "Español", label: "Español" },
                { value: "Inglés", label: "Inglés" },
                { value: "Quechua", label: "Quechua" },
            ],
            icon: <IoLanguage />,
        },
        {
            key: "theme",
            title: "Tema oscuro",
            description: "Activa el tema oscuro de la aplicación",
            type: "toggle",
            value: preferences.theme,
            icon: <FaMoon />,
        },
        {
            key: "hourZone",
            title: "Zona Horaria",
            description: "Selecciona la zona horaria de la aplicación",
            type: "select",
            value: preferences.hourZone,
            options: [
                { value: "GMT-5", label: "GMT-5" },
                { value: "GMT-6", label: "GMT-6" },
                { value: "GMT-7", label: "GMT-7" },
            ],
            icon: <FaPalette />,
        },
    ];

    const securitySettings = [
        {
            key: "security2FA",
            title: "Autenticación de Dos Factores",
            description:
                "Activa la autenticación de dos factores para mayor seguridad",
            type: "toggle",
            value: false,
            icon: <MdSystemSecurityUpdateWarning />,
        },
    ];

    const user = {
        name: "Juan Pérez",
        initials: "JP",
        email: "juan.perez@unmsm.edu.pe",
        code: "20190234",
        role: "Estudiante",
        faculty: "Ingeniería de Sistemas e Informática",
        cycle: "10mo Ciclo",
    };

    return (
        <div className="settings-container">
            <div className="profile">
                <ProfileCard
                    user={user}
                    variant="full"
                    onEdit={() => navigate("/editProfile")}
                />
            </div>
            <div className="settings-control">
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
                    settingsItems={settingsSystem}
                    onChangeSetting={handleSettingChange}
                    actions={
                        <button
                            className="settings-action-btn"
                            
                            onClick={handleSave}
                        >
                            Guardar cambios
                        </button>
                    }
                />

                <InfoCard
                    title={
                        <div className="info-card-header-custom">
                            <MdOutlineSecurity className="info-card-icon" />
                            <span className="info-card-title-text">
                                Seguridad
                            </span>
                        </div>
                    }
                    description="Configura las opciones de seguridad de la aplicación"
                    variant="settings"
                    settingsItems={securitySettings}
                />
            </div>
        </div>
    );
}

export default Settings;
