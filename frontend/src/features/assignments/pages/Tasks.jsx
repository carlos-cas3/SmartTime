import useTasksData from "../hooks/useTasksData";
import ActivityPage from "../ActivityPage";

export default function Tasks() {
    return (
        <ActivityPage
            createTitle="Crear tarea"
            editTitle="Editar tarea"
            useDataHook={useTasksData}
            drawerLabels={{
                edit: "Editar Tarea",
                delete: "Eliminar Tarea",
            }}
        />
    );
}
