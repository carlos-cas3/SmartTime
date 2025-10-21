import React from "react";
import { FaUserGraduate, FaBookOpen } from "react-icons/fa";
import "./ProfileCard.css";

export default function ProfileCard({ user, variant = "full", onEdit }) {
    return (
        <div className={`profile-card ${variant}`}>
            <div className="profile-avatar">
                {user.initials || user.name?.[0] || "?"}
            </div>

            <div className="profile-info">
                <h3 className="profile-name">{user.name}</h3>

                {variant === "full" ? (
                    <>
                        <p className="profile-email">{user.email}</p>
                        <div className="profile-code">
                            <span>Código:</span>
                            <input
                                type="text"
                                readOnly
                                value={user.code}
                                className="profile-code-input"
                            />
                        </div>

                        <div className="profile-faculty">
                            <FaUserGraduate className="profile-icon" />
                            <span>{user.faculty}</span>
                        </div>

                        <button className="profile-edit-btn" onClick={onEdit}>
                            Editar perfil
                        </button>
                    </>
                ) : (
                    <>
                        <div className="profile-tags">
                            <span className="tag role">{user.role}</span>
                            <span className="tag code">{user.code}</span>
                        </div>

                        <div className="profile-details">
                            <div className="profile-detail">
                                <FaUserGraduate className="profile-icon" />
                                <span>{user.faculty}</span>
                            </div>
                            <div className="profile-detail">
                                <FaBookOpen className="profile-icon" />
                                <span>{user.cycle}</span>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
