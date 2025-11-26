import { useState, useEffect, useContext } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import "./EditPersonalInfoCard.css";
import { UserContext } from "../../Contexts/user/UserContext";

export default function EditPersonalInfoCard() {

    const { user, updateUser } = useContext(UserContext);

    // 1) Valores iniciales: se llenan usando el usuario del contexto
    const [formData, setFormData] = useState({
        fullName: user.fullName || user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        city: user.city || "",
        country: user.country || "Perú",
        address: user.address || "",
        bio: user.bio || "",
    });

    const [isDirty, setIsDirty] = useState(false);

    // 2) Detectar cambios comparando formData vs user
    useEffect(() => {
        const currentUserData = {
            fullName: user.fullName || user.name || "",
            email: user.email || "",
            phone: user.phone || "",
            city: user.city || "",
            country: user.country || "Perú",
            address: user.address || "",
            bio: user.bio || "",
        };

        setIsDirty(JSON.stringify(formData) !== JSON.stringify(currentUserData));
    }, [formData, user]);

    // 3) Manejar campos
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // 4) Guardar cambios al UserContext (ya NO a localStorage manualmente)
    const saveProfile = () => {
        updateUser({
            name: formData.fullName,
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            city: formData.city,
            country: formData.country,
            address: formData.address,
            bio: formData.bio,
        });

        setIsDirty(false);
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
