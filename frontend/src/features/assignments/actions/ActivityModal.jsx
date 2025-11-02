import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import DropdownSelect from "../../../components/UI/Dropdown/DropdownSelect";
import "./ActivityModal.css";

export default function ActivityModal({
    isOpen,
    onClose,
    onSubmit,
    initialData = {}, // ← usado solo por EditModal
    titleHeader = "Nueva Actividad",
    description = "Agrega una nueva actividad a tu lista",
}) {
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [status, setStatus] = useState("");
    const [date, setDate] = useState("");
    const [priority, setPriority] = useState("");
    const [matriz, setMatriz] = useState("");
    const [openPriority, setOpenPriority] = useState(false);
    const [openStatus, setOpenStatus] = useState(false);

    // modal se abre en modo edición, precargar datos
    useEffect(() => {
        if (initialData) {
            setTitle(initialData.title || "");
            setPriority(initialData.priority || "");
            setStatus(initialData.status || "");
            setCategory(initialData.category || "");
            setDate(initialData.date || "");
            setMatriz(initialData.matriz || "");
        }
    }, [initialData, isOpen]);

    useEffect(() => {
        const handleEsc = (e) => e.key === "Escape" && onClose();
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validar que todos los campos tengan valor
        if (!title || !priority || !status || !category || !date || !matriz) {
            alert("Por favor, completar todos los campos");
            return;
        }

        const data = { title, priority, status, category, date, matriz };
        onSubmit(data);
        onClose();
    };

    const priorityOptions = [
        { label: "Alta", value: "high" },
        { label: "Media", value: "medium" },
        { label: "Baja", value: "low" },
    ];

    const statusOptions = [
        { label: "Pendiente", value: "pending" },
        { label: "No completado", value: "not-completed" },
        { label: "Completado", value: "completed" },
    ];

    const handleMatrizSelect = (valor) => setMatriz(valor);

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div
                className="modal-container"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="modal-header">
                    <h2>{titleHeader}</h2>
                    <p className="modal-description">{description}</p>
                </div>

                {/* Formulario */}
                <form className="modal-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Título</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Escribe el título"
                            required
                        />
                    </div>

                    <div className="form-row">
                        <div className="form-group">
                            <label>Prioridad</label>
                            <DropdownSelect
                                options={priorityOptions}
                                value={priority}
                                onChange={(v) => setPriority(v)}
                                placeholder="Selecciona prioridad"
                                open={openPriority}
                                onToggle={() => {
                                    setOpenPriority(!openPriority);
                                    setOpenStatus(false);
                                }}
                                onClose={() => setOpenPriority(false)}
                            />
                        </div>

                        <div className="form-group">
                            <label>Estado</label>
                            <DropdownSelect
                                options={statusOptions}
                                value={status}
                                onChange={(v) => setStatus(v)}
                                placeholder="Selecciona estado"
                                open={openStatus}
                                onToggle={() => {
                                    setOpenStatus(!openStatus);
                                    setOpenPriority(false);
                                }}
                                onClose={() => setOpenStatus(false)}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Curso / Categoría</label>
                        <input
                            type="text"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            placeholder="Ejemplo: Matemáticas o Proyecto X"
                        />
                    </div>

                    <div className="form-group">
                        <label>Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label>Matriz de Eisenhower</label>
                        <div className="eisenhower-grid">
                            {[
                                "Urgente e Importante",
                                "No Urgente e Importante",
                                "Urgente y No Importante",
                                "No Urgente y No Importante",
                            ].map((txt) => (
                                <div
                                    key={txt}
                                    className={`cell ${
                                        matriz === txt ? "selected" : ""
                                    }`}
                                    onClick={() => handleMatrizSelect(txt)}
                                >
                                    {txt}
                                </div>
                            ))}
                        </div>
                    </div>

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
