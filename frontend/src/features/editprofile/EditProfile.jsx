import { useState, useContext } from "react";
import EditPersonalInfoCard from "./EditPersonalInfoCard";
import AcademicInfoCard from "./AcademicInfoCard";
import ProfilePhotoCard from "./ProfilePhotoCard";
import "./EditProfile.css";
import { UserContext } from "../../Contexts/user/UserContext";

export default function EditProfile() {
    const { user, updateUser } = useContext(UserContext);

    const [personalData, setPersonalData] = useState({
        fullName: user.name || user.fullName || "",
        email: user.email || "",
    });

    const [academicData, setAcademicData] = useState({
        faculty: user.faculty || "",
        cycle: user.cycle || "",
    });

    const [photoData, setPhotoData] = useState(user.photo || null);
    const [isDirty, setIsDirty] = useState(false);


    const updatePhoto = (newPhoto) => {
        console.log(
            "updatePhoto() recibido:",
            newPhoto?.slice(0, 40),
            "..."
        );

        setPhotoData(newPhoto);

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
        updateUser({
            nombre: personalData.fullName,
            correo: personalData.email,
            facultad: academicData.faculty,
            ciclo: academicData.cycle,
        });
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

            {/* BOTÃ“N GUARDAR SI CAMBIÃ“ ALGO */}
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
