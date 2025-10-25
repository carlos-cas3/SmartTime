import InfoCardTable from "../../../components/UI/InfoCard/InfoCardTable/InfoCardTable";

export default function ReportsTableRow() {
    return (
        <InfoCardTable
            title="Historial de Actividades"
            description="Registros de esta semana"
            columns={[
                { label: "Actividad", field: "actividad" },
                { label: "Tipo", field: "tipo", type: "tag" },
                { label: "Curso", field: "curso" },
                { label: "Fecha", field: "fecha" },
                { label: "Estado", field: "estado", type: "status" },
            ]}
            data={[
                {
                    actividad: "Tarea 1",
                    tipo: "Tarea",
                    curso: "Algoritmos",
                    fecha: "7 oct",
                    estado: "Completada",
                },
                {
                    actividad: "PC1",
                    tipo: "Examen",
                    curso: "Seguridad",
                    fecha: "8 oct",
                    estado: "Pendiente",
                },
                {
                    actividad: "Tarea 1",
                    tipo: "Tarea",
                    curso: "Algoritmos",
                    fecha: "7 oct",
                    estado: "Completada",
                },
                {
                    actividad: "PC1",
                    tipo: "Examen",
                    curso: "Seguridad",
                    fecha: "8 oct",
                    estado: "Pendiente",
                },
                {
                    actividad: "Tarea 1",
                    tipo: "Tarea",
                    curso: "Algoritmos",
                    fecha: "7 oct",
                    estado: "Completada",
                },
                {
                    actividad: "PC1",
                    tipo: "Examen",
                    curso: "Seguridad",
                    fecha: "8 oct",
                    estado: "Pendiente",
                },
            ]}
        />
    );
}
