import { useState, useEffect } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import "./EditPersonalInfoCard.css";

export default function EditPersonalInfoCard() {
    // 1) Cargar datos iniciales desde localStorage
    const [formData, setFormData] = useState(() => {
        const saved = localStorage.getItem("profile-info");
        return saved
            ? JSON.parse(saved)
            : {
                fullName: "",
                email: "",
                phone: "",
                city: "",
                country: "Perú",
                address: "",
                bio: "",
            };
    });

    const [isDirty, setIsDirty] = useState(false);

    // 2) Detectar cambios (igual que Notifications)
    useEffect(() => {
        const saved = localStorage.getItem("profile-info");
        const parsed = saved ? JSON.parse(saved) : {};

        setIsDirty(JSON.stringify(formData) !== JSON.stringify(parsed));
    }, [formData]);

    // 3) Manejar campos
    const handleChange = (e) => {
        const { name, value } = e.target;

        console.log("Cambio detectado:", name, "=>", value);

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 4) Guardar cambios
    const saveProfile = () => {
        localStorage.setItem("profile-info", JSON.stringify(formData));
        setIsDirty(false);
        console.log("Perfil guardado:", formData);
    };

    return (
        <div className="edit-profile-container">
            <InfoCardBase title="Información Personal">
                <div className="form-grid">
                    <div className="field">
                        <label>Nombre completo</label>
                        <input
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>

                    <div className="field">
                        <label>Correo electrónico</label>
                        <input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            type="email"
                        />
                    </div>

                    <div className="field">
                        <label>Teléfono</label>
                        <input
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>

                    <div className="field">
                        <label>Ciudad</label>
                        <input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>

                    <div className="field">
                        <label>País</label>
                        <select
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                        >
                            <option value="Perú">Perú</option>
                            <option value="Chile">Chile</option>
                            <option value="México">México</option>
                        </select>
                    </div>

                    <div className="field full">
                        <label>Dirección</label>
                        <input
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            type="text"
                        />
                    </div>

                    <div className="field full">
                        <label>Biografía</label>
                        <textarea
                            name="bio"
                            value={formData.bio}
                            onChange={handleChange}
                            rows={3}
                        />
                    </div>
                </div>
            </InfoCardBase>

            {/* Igual que Notifications: el botón aparece solo si hubo cambios */}
            {isDirty && (
                <div className="edit-profile-save-container">
                    <button className="save-all-button" onClick={saveProfile}>
                        Guardar cambios
                    </button>
                </div>
            )}
        </div>
    );
}
