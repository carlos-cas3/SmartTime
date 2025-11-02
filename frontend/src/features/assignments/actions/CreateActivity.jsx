import ActivityModal from "./ActivityModal";

export default function CreateActivity({ isOpen, onClose, onCreate , title}) {
    return (
        <ActivityModal
            isOpen={isOpen}
            onClose={onClose}
            initialData={""}
            titleHeader={title}
            description="Agrega una nueva actividad a tu lista"
            onSubmit={(data) => {
                onCreate(data);
                onClose();
            }}
        />
    );
}
