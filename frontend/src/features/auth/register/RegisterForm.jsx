import { useState } from "react";
import { FaUser, FaEnvelope, FaLock, FaIdCard } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import "./RegisterForm.css";

export default function RegisterForm({ onRegister }) {
    const [formData, setFormData] = useState({
        nombre: "",
        codigo: "",
        correo: "",
        facultad: "Facultad de Ingeniería de Sistemas e Informática",
        password: "",
        confirmar: "",
    });

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await onRegister(formData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form className="register-box" onSubmit={handleSubmit}>
            <div className="back-link">
                <Link to="/login">
                    <IoIosArrowBack /> Volver
                </Link>
            </div>

            <h2>Crear Cuenta</h2>
            <p className="subtitle">
                Completa el formulario para registrarte en el sistema
            </p>

            {error && <p className="error" style={{ color: "red", textAlign: "center" }}>{error}</p>}

            <div className="form-grid">
                <div className="input-group full">
                    <FaUser className="icon" />
                    <input
                        type="text"
                        name="nombre"
                        placeholder="Ej: Juan Carlos Pérez López"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group half">
                    <FaIdCard className="icon" />
                    <input
                        type="text"
                        name="codigo"
                        placeholder="Ej: 20190234"
                        value={formData.codigo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group half">
                    <FaEnvelope className="icon" />
                    <input
                        type="email"
                        name="correo"
                        placeholder="correo@unmsm.edu.pe"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group full">
                    <input
                        type="text"
                        name="facultad"
                        value={formData.facultad}
                        readOnly
                    />
                </div>

                <div className="input-group half">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Mínimo 6 caracteres"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="input-group half">
                    <FaLock className="icon" />
                    <input
                        type="password"
                        name="confirmar"
                        placeholder="Repite tu contraseña"
                        value={formData.confirmar}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <button type="submit" className="register-button" disabled={loading}>
                {loading ? "Creando cuenta..." : "Crear Cuenta"}
            </button>

            <div className="login-link">
                ¿Ya tienes una cuenta?{" "}
                <span
                    onClick={() => navigate("/login")} // 👈 Esto reemplaza al <a href="/login">
                    style={{
                        color: "#007bff",
                        cursor: "pointer",
                        textDecoration: "underline",
                    }}
                >
                    Inicia sesión aquí
                </span>
            </div>
        </form>
    );
}
