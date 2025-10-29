import { createPortal } from "react-dom"

import { useEffect } from "react";
import DropdownSelect from "../../../components/UI/Dropdown/DropdownSelect";

import "./ActivityModal.css";

export default function ActivityModal({
    isOpen,
    onClose,
    title = "Nueva Actividad",
    description = "Agrega una nueva actividad a tu lista",
}) {
    
    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="modal-header">
                    <h2>{title}</h2>
                    <p className="modal-description">{description}</p>
                </div>

                {/* Form */}
                <form className="modal-form">
                    <div className="form-group">
                        <label htmlFor="titulo">Título *</label>
                        <input
                            id="titulo"
                            type="text"
                            placeholder="Escribe el título de la tarea"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Prioridad</label>
                            <select defaultValue="">
                                <option value="" disabled>
                                    Selecciona
                                </option>
                                <option value="alta">Alta</option>
                                <option value="media">Media</option>
                                <option value="baja">Baja</option>
                            </select>
                        </div>

                        <div className="form-group">
                            <label>Estado</label>
                            <select defaultValue="">
                                <option value="" disabled>
                                    Selecciona
                                </option>
                                <option value="pendiente">Pendiente</option>
                                <option value="en_progreso">En progreso</option>
                                <option value="completado">Completado</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Curso / Categoría</label>
                        <input
                            type="text"
                            placeholder="Ejemplo: Matemáticas o Proyecto X"
                        />
                    </div>

                    <div className="form-group">
                        <label>Fecha</label>
                        <input type="date" />
                    </div>

                    <div className="form-group">
                        <label>Matriz de Eisenhower</label>
                        <div className="eisenhower-grid">
                            <div className="cell">Urgente e Importante</div>
                            <div className="cell">No Urgente e Importante</div>
                            <div className="cell">Urgente y No Importante</div>
                            <div className="cell">
                                No Urgente y No Importante
                            </div>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="modal-actions">
                        <button
                            type="button"
                            className="btn-cancel"
                            onClick={onClose}
                        >
                            Cancelar
                        </button>
                        <button type="submit" className="btn-save">
                            Guardar
                        </button>
                    </div>
                </form>
            </div>
        </div>,
        document.body
    );
}
