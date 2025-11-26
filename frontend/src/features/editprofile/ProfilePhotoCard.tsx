import { useEffect, useState, useRef, ChangeEvent } from "react";
import { FaCamera } from "react-icons/fa";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import { generateInitialsAvatar } from "../../utils/generateAvatar";
import "./ProfilePhotoCard.css";

interface ProfilePhotoCardProps {
    studentCode: string;
    studentFullName?: string; // <-- ahora opcional
    initialPhoto?: string | null;
    onSave?: (photo: string | null) => Promise<void> | void;
    showSaveButton?: boolean;
    onPhotoChange?: (newPhoto: string | null) => void;
}

export default function ProfilePhotoCard({
    studentCode,
    studentFullName,
    initialPhoto = null,
    onSave,
    showSaveButton = false,
    onPhotoChange,
}: ProfilePhotoCardProps) {
    const [photo, setPhoto] = useState<string | null>(initialPhoto);
    const [dirty, setDirty] = useState(false);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // --- Generar avatar si no existe foto ---

    useEffect(() => {
        if (initialPhoto) {
            setPhoto(initialPhoto);
            return;
        }

        if (studentFullName) {
            const avatar = generateInitialsAvatar(studentFullName);
            setPhoto(avatar);
            if (onPhotoChange) onPhotoChange(avatar);
        }
    }, [initialPhoto, studentFullName]);

    // *** NUEVO: sincroniza cambios desde el contexto ***
    useEffect(() => {
        if (initialPhoto) {
            setPhoto(initialPhoto);
            if (onPhotoChange) onPhotoChange(initialPhoto);
        }
    }, [initialPhoto]);

    // --- Cuando el usuario sube una foto ---
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
            const newPhoto = reader.result as string;

            setPhoto(newPhoto);
            setDirty(true);

            if (onPhotoChange) onPhotoChange(newPhoto);
        };
        reader.readAsDataURL(file);

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
            isDirty={showSaveButton ? dirty : false}
            onSave={showSaveButton ? handleSave : undefined}
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

                    <div
                        className="camera-icon"
                        onClick={() => fileInputRef.current?.click()}
                    >
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

            <button
                className="upload-btn"
                onClick={() => fileInputRef.current?.click()}
            >
                Subir nueva foto
            </button>

            <p className="rules">JPG, PNG o GIF. Máximo 2MB.</p>

            <div className="student-code-box">
                <label>Código de estudiante</label>
                <input
                    type="text"
                    value={studentCode}
                    readOnly
                    onClick={() =>
                        alert("El código de estudiante no puede modificarse.")
                    }
                />
            </div>
        </InfoCardBase>
    );
}
