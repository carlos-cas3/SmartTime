import ActivityModal from "./ActivityModal";

export default function EditActivity({ isOpen, onClose, activity, onUpdate , title}) {
    const handleSubmit = (data) => {
        onUpdate({ ...activity, ...data });
    };

    return (
        <ActivityModal
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            initialData={activity}
            titleHeader= {title}
            description="Modifica los datos de la actividad seleccionada"
        />
    );
}
