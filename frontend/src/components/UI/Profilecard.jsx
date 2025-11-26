import { useEffect, useState, useContext } from "react";
import { UserContext } from "../../Contexts/user/UserContext";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import "./ProfileCard.css";

export default function ProfileCard({
    user: userProp,
    variant = "full",
    onEdit,
}) {
    const { user: userContext } = useContext(UserContext);

    const [userLocal, setUserLocal] = useState(null);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUserLocal(JSON.parse(saved));

        const handler = () => {
            const updated = localStorage.getItem("user");
            if (updated) setUserLocal(JSON.parse(updated));
        };

        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, []);

    const user = userProp  || userLocal|| userContext;

    if (!user) return <div>Cargando perfil...</div>;

    return (
        <div className={`profile-card ${variant}`}>
            <div className="profile-avatar">
                {user.photoUrl ? (
                    <img src={user.photoUrl} />
                ) : (
                    user.initials || "?"
                )}
            </div>

            <div className="profile-info">
                <h3 className="profile-name">{user.name}</h3>
                <p className="profile-email">{user.email}</p>

                {variant === "full" && (
                    <>
                        <div className="profile-detail">
                            <strong>Código:</strong>
                            <span className="profile-code-input">
                                {user.code}
                            </span>
                        </div>

                        <div className="profile-faculty">
                            <FaUserGraduate className="profile-icon" />
                            {user.faculty}
                        </div>

                        <div className="profile-detail">
                            <FaBookOpen className="profile-icon" />
                            {user.cycle}
                        </div>

                        <button className="profile-edit-btn" onClick={onEdit}>
                            Editar perfil
                        </button>
                    </>
                )}

                {variant === "presentation" && (
                    <>
                        <div className="profile-tags">
                            <span className="tag role">{user.role}</span>
                            <span className="tag code">{user.code}</span>
                        </div>

                        <div className="profile-details">
                            <div className="detail">
                                <FaUserGraduate className="icon" />
                                {user.faculty}
                            </div>

                            <div className="detail">
                                <FaBookOpen className="icon" />
                                {user.cycle}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
