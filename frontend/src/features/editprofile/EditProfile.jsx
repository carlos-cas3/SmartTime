import { useState, useContext } from "react";
import EditPersonalInfoCard from "./EditPersonalInfoCard";
import AcademicInfoCard from "./AcademicInfoCard";
import ProfilePhotoCard from "./ProfilePhotoCard";
import "./EditProfile.css";
import { UserContext } from "../../Contexts/user/UserContext";

export default function EditProfile() {
    const { user, updateUser } = useContext(UserContext);

    // Datos personales iniciales desde el contexto
    const [personalData, setPersonalData] = useState({
        fullName: user.fullName || "",
        email: user.email || "",
        phone: user.phone || "",
        city: user.city || "",
        country: user.country || "Perú",
        address: user.address || "",
        bio: user.bio || "",
    });

    // Datos académicos iniciales desde el contexto
    const [academicData, setAcademicData] = useState({
        faculty: user.faculty || "fisi",
        cycle: user.cycle || "1",
    });

    const [photoData, setPhotoData] = useState(user.photo || null);
    const [isDirty, setIsDirty] = useState(false);


    const updatePhoto = (newPhoto) => {
        console.log(
            "🟢 updatePhoto() recibido:",
            newPhoto?.slice(0, 40),
            "..."
        );

        setPhotoData(newPhoto);
        console.log("📌 photoData ahora:", newPhoto?.slice(0, 40), "...");

        updateUser({ photo: newPhoto });

        localStorage.setItem(
            "profile-info",
            JSON.stringify({
                ...personalData,
                faculty: academicData.faculty,
                cycle: academicData.cycle,
                photo: newPhoto,
            })
        );

        setIsDirty(true);
    };

    const updatePersonal = (newData) => {
        setPersonalData((prev) => ({ ...prev, ...newData }));
        setIsDirty(true);
    };

    const updateAcademic = (newData) => {
        setAcademicData((prev) => ({ ...prev, ...newData }));
        setIsDirty(true);
    };

    const saveAll = () => {
        console.log("Guardando PERSONAL:", personalData);
        console.log("Guardando ACADÉMICO:", academicData);
        console.log("Guardando FOTO:", photoData);

        // ⬇⬇⬇ ACTUALIZA EL USER CONTEXT (lo más importante)
        updateUser({
            ...personalData,
            ...academicData,
            photo: photoData,
        });

        // Esto recarga ProfileCard, Sidebar, etc automáticamente
        setIsDirty(false);
    };

    return (
        <div className="edit-profile-page">
            {/* COLUMNA 1 */}
            <div className="edit-profile-left">
                <ProfilePhotoCard
                    studentCode={user.code}
                    studentFullName={personalData.fullName || "Usuario"}
                    initialPhoto={photoData}
                    onPhotoChange={updatePhoto}
                />
            </div>

            {/* COLUMNA 2 */}
            <div className="edit-profile-center">
                <EditPersonalInfoCard
                    className="edit-personal-info-card"
                    initialData={personalData}
                    onChange={updatePersonal}
                />
            </div>

            {/* COLUMNA 3 */}
            <div className="edit-profile-right">
                <AcademicInfoCard
                    initialData={academicData}
                    onChange={updateAcademic}
                />
            </div>

            {/* BOTÓN GUARDAR SI CAMBIÓ ALGO */}
            {isDirty && (
                <div className="edit-profile-save-container">
                    <button className="save-all-button" onClick={saveAll}>
                        Guardar cambios
                    </button>
                </div>
            )}
        </div>
    );
}
