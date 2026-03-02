import useExtrasData from "../hooks/useExtrasData";
import ActivityPage from "../ActivityPage";

export default function Extras() {
    return (
        <ActivityPage
            createTitle="Crear Extra"
            editTitle="Editar Extra"
            useDataHook={useExtrasData}
            type="extras"
            drawerLabels={{
                edit: "Editar Extra",
                delete: "Eliminar Extra",
            }}
        />
    );
}
