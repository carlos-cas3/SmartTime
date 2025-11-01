import ActivityModal from "./ActivityModal";

export default function EditActivity({ isOpen, onClose, activity, onUpdate }) {
    const handleSubmit = (data) => {
        onUpdate({ ...activity, ...data }); // ← mantiene el id original
    };

    return (
        <ActivityModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            initialData={activity}
            titleHeader="Editar Actividad"
            description="Modifica los datos de la actividad seleccionada"
        />
    );
}
