import { useState, useRef, ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import "./ProfilePhotoCard.css";

interface ProfilePhotoCardProps {
    studentCode: string;
    initialPhoto?: string | null;
    onSave?: (photo: string | null) => Promise<void> | void;
}

export default function ProfilePhotoCard({
    studentCode,
    initialPhoto = null,
    onSave,
}: ProfilePhotoCardProps) {
    const [photo, setPhoto] = useState<string | null>(initialPhoto);
    const [dirty, setDirty] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const validTypes = ["image/jpeg", "image/png", "image/gif"];
        if (!validTypes.includes(file.type)) {
            alert("Formato no permitido. Usa JPG, PNG o GIF.");
            return;
        }

        if (file.size > 2 * 1024 * 1024) {
            alert("La imagen supera los 2MB.");
            return;
        }

        const reader = new FileReader();
        reader.onload = () => {
            setPhoto(reader.result as string);
            setDirty(true);
        };
        reader.readAsDataURL(file);
    };

    const handleClickUpload = () => {
        fileInputRef.current?.click();
    };

    const handleUneditableCode = () => {
        alert(
            "El código de estudiante no puede ser modificado. Contacta con administración si necesitas actualizarlo."
        );
    };

    const handleSave = async () => {
        if (onSave) await onSave(photo);
        setDirty(false);
    };

    return (
        <InfoCardBase
            title="Foto de perfil"
            icon={<FaCamera />}
            variant="profile"
            isDirty={dirty}
            onSave={handleSave}
        >
            <div className="photo-container">
                <div className="photo-preview">
                    {photo ? (
                        <img src={photo} alt="Foto de perfil" />
                    ) : (
                        <div className="default-photo">
                            <span>Foto</span>
                        </div>
                    )}

                    <div className="camera-icon" onClick={handleClickUpload}>
                        <FaCamera />
                    </div>
                </div>
            </div>

            <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                accept="image/png, image/jpeg, image/gif"
                onChange={handleFileChange}
            />

            <button className="upload-btn" onClick={handleClickUpload}>
                Subir nueva foto
            </button>

            <p className="rules">JPG, PNG o GIF. Máximo 2MB.</p>

            <div className="student-code-box">
                <label>Código de estudiante</label>
                <input
                    type="text"
                    value={studentCode}
                    readOnly
                    onClick={handleUneditableCode}
                />
            </div>

            <p className="warning">
                El código de estudiante no puede ser modificado.
            </p>
        </InfoCardBase>
    );
}
