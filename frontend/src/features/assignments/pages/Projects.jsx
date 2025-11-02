import useProjectsData from "../hooks/useProjectsData";
import ActivityPage from "../ActivityPage";

export default function Projects() {
    return (
        <ActivityPage
            createTitle="Crear proyecto"
            editTitle="Editar proyecto"
            useDataHook={useProjectsData}
            drawerLabels={{
                edit: "Editar Proyecto",
                delete: "Eliminar Proyecto",
            }}
        />
    );
}
