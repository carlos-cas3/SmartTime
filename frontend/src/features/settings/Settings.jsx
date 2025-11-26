import { useState } from "react";

import { IoLanguage } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { FaPalette, FaMoon } from "react-icons/fa";
import {
    MdSystemSecurityUpdateWarning,
    MdOutlineSecurity,
} from "react-icons/md";

import ProfileCard from "../../components/UI/temp";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import InfoCardSettings from "../../components/UI/InfoCard/InfoCardSettings";

import { useUser } from "../../Contexts/user/useUser";

import "./Settings.css";

function Settings() {
    const navigate = useNavigate();

    // AHORA SÍ → traes todo el contexto correcto
    const { user, updateUser } = useUser();

    const [preferences, setPreferences] = useState({
        language: "Español",
        theme: false,
        hourZone: "GMT-5",
    });

    const [isDirty, setIsDirty] = useState(false);

    const handleSettingChange = (key, value) => {
        setPreferences((prev) => ({ ...prev, [key]: value }));
        setIsDirty(true);
    };

    const handleSave = () => {
        updateUser({
            preferences,
        });


        setIsDirty(false);
    };

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

    if (!user) {
        return <div className="settings-container">Cargando perfil...</div>;
    }

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
                <InfoCardBase
                    title="Preferencias del Sistema"
                    isDirty={isDirty}
                    onSave={handleSave}
                    variant="settings"
                >
                    <InfoCardSettings
                        settingsItems={settingsSystem}
                        onChange={handleSettingChange}
                    />
                </InfoCardBase>

                <InfoCardBase
                    title={
                        <div className="info-card-header-custom">
                            <MdOutlineSecurity className="info-card-icon" />
                            <span className="info-card-title-text">
                                Seguridad
                            </span>
                        </div>
                    }
                    variant="settings"
                >
                    <InfoCardSettings
                        settingsItems={securitySettings}
                        onChange={(key, value) => {
                            console.log("Seguridad updated:", key, value);
                        }}
                    />
                </InfoCardBase>
            </div>
        </div>
    );
}

export default Settings;
