import React, { useState } from "react";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css";

export default function LoginForm() {
    const [codigo, setCodigo] = useState("");
    const [password, setPassword] = useState("");
    const [recordarme, setRecordarme] = useState(false);
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const response = await fetch("http://localhost:3000/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ codigo, password }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Error al iniciar sesión");
            }

            localStorage.setItem("token", data.token);
            localStorage.setItem("user", JSON.stringify(data.user));
            navigate("/dashboard");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>

                {error && <p className="error">{error}</p>}

                <div className="codigo-container">
                    <label>Código de Estudiante</label>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="password-container">
                    <label>Contraseña</label>

                    <div className="input-group password-group">
                        <FaLock className="icon" />

                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <span
                            className="toggle-password"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </span>
                    </div>
                </div>

                <div className="options">
                    <label>
                        <input
                            type="checkbox"
                            checked={recordarme}
                            onChange={() => setRecordarme(!recordarme)}
                        />
                        Recordarme
                    </label>
                </div>

                <button type="submit" className="login-button">
                    Iniciar Sesión
                </button>

                <p className="register">
                    ¿No tienes una cuenta?{" "}
                    <span
                        className="register-link"
                        onClick={() => navigate("/register")}
                    >
                        Regístrate aquí
                    </span>
                </p>
            </form>
        </div>
    );
}
