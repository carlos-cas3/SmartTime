import React from "react";
import "./AuthLayout.css";

export default function AuthLayout({ title, children }) {
    return (
        <div className="auth-layout">
            <div className="auth-header">
                <div className="auth-logo">
                    <span className="logo-icon">🎓</span>
                </div>
                <h1 className="auth-title">{title}</h1>
            </div>

            <div className="auth-content">{children}</div>

            <footer className="auth-footer">
                © 2025 UNMSM - Todos los derechos reservados
            </footer>
        </div>
    );
}
