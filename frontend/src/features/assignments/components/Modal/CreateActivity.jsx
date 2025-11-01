import ActivityModal from "./ActivityModal";

export default function CreateActivity({ isOpen, onClose, onCreate }) {
    return (
        <ActivityModal
            isOpen={isOpen}
            onClose={onClose}
            initialData={""}
            title="Nueva Actividad"
            description="Agrega una nueva actividad a tu lista"
            onSubmit={(data) => {
                onCreate(data);
                onClose();
            }}
        />
    );
}
