import useExamsData from "../hooks/useExamsData";
import ActivityPage from "../ActivityPage";

export default function Exams() {
    return (
        <ActivityPage
            createTitle="Crear Examen"
            editTitle="Editar examen"
            useDataHook={useExamsData}
            drawerLabels={{
                edit: "Editar Examen",
                delete: "Eliminar Examen",
            }}
        />
    );
}
