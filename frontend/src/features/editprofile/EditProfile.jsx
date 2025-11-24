import { useState } from "react";
import EditPersonalInfoCard from "./EditPersonalInfoCard";
import AcademicInfoCard from "./AcademicInfoCard";
import ProfilePhotoCard from "./ProfilePhotoCard";
import "./EditProfile.css";

export default function EditProfile() {
    const [academicData, setAcademicData] = useState({
        faculty: "fisi",
        cycle: "1",
    });

    const saveAcademic = (updatedData) => {
        console.log("Guardando datos académicos:", updatedData);
        setAcademicData(updatedData);
    };

    return (
        <div className="edit-profile-page">
            {/* COLUMNA IZQUIERDA */}
            <div className="edit-profile-left">
                <ProfilePhotoCard
                    className="profile-photo-card"
                    studentCode="20190234"
                    initialPhoto={null}
                />
            </div>

            {/* COLUMNA DERECHA */}

            <div className="edit-profile-right">
                <EditPersonalInfoCard
                    className="edit-personal-info-card"
                    initialData={{
                        fullName: "",
                        email: "",
                        phone: "",
                        city: "",
                        country: "Perú",
                        address: "",
                        bio: "",
                    }}
                />

                <AcademicInfoCard
                    className="academic-info-card"
                    initialData={academicData}
                    onSave={saveAcademic}
                />
            </div>
        </div>
    );
}
