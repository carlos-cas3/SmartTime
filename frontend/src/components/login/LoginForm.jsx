import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // 👈 Importamos el hook
import "./LoginForm.css";

export default function LoginForm({ onLogin }) {
    const [codigo, setCodigo] = useState("");
    const [password, setPassword] = useState("");
    const [recordarme, setRecordarme] = useState(false);
    const navigate = useNavigate(); // 👈 Inicializamos navigate

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = { codigo, password, recordarme };
        console.log("Datos enviados:", userData);

        if (onLogin) onLogin(userData);

        // Simulación de login de prueba
        if (codigo === "20190234" && password === "123456") {
            alert("Inicio de sesión exitoso 🎉");
            navigate("/dashboard"); // 👈 Navegación interna
        } else {
            alert("Credenciales incorrectas ❌");
        }
    };

    return (
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>Iniciar Sesión</h2>
                <p className="subtitle">
                    Ingresa tus credenciales para acceder al sistema
                </p>

                {/* Campo: Código de estudiante */}
                <div className="codigo-container">
                    <label>Código de Estudiante</label>
                    <div className="input-group">
                        <FaUser className="icon" />
                        <input
                            type="text"
                            placeholder="Ej: 20190234"
                            value={codigo}
                            onChange={(e) => setCodigo(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Campo: Contraseña */}
                <div className="password-container">
                    <label>Contraseña</label>
                    <div className="input-group">
                        <FaLock className="icon" />
                        <input
                            type="password"
                            placeholder="••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                {/* Recordarme + Olvidé contraseña */}
                <div className="options">
                    <label>
                        <input
                            type="checkbox"
                            checked={recordarme}
                            onChange={() => setRecordarme(!recordarme)}
                        />
                        Recordarme
                    </label>
                    <a href="#" className="forgot">
                        ¿Olvidaste tu contraseña?
                    </a>
                </div>

                <button type="submit" className="login-button">
                    Iniciar Sesión
                </button>

                <div className="test-credentials">
                    <p>Para probar el sistema, usa estas credenciales:</p>
                    <p>
                        <strong>Usuario:</strong> 20190234 <br />
                        <strong>Contraseña:</strong> 123456
                    </p>
                </div>

                {/* Enlace para registrarse */}
                <p className="register">
                    ¿No tienes una cuenta?{" "}
                    <span
                        onClick={() => navigate("/register")} // 👈 Usamos navigate
                        style={{
                            color: "#007bff",
                            cursor: "pointer",
                            textDecoration: "underline",
                        }}
                    >
                        Regístrate aquí
                    </span>
                </p>
            </form>
        </div>
    );
}
