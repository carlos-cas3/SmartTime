import { FaTasks, FaUser } from "react-icons/fa";
import InfoCard from "../UI/InfoCard";
import StudyHoursChart from "../charts/StudyHoursChart";
import ActivityLineChart from "../charts/ActivityLineChart";

export default function Dashboard() {
    const actividades = [
        {
            icon: "book",
            title: "Lectura de capítulo 3",
            course: "Literatura Moderna",
            date: "15/10",
            priority: "Alta",
        },
        {
            icon: "code",
            title: "Práctica de React",
            course: "Desarrollo Web",
            date: "17/10",
            priority: "Media",
        },
        {
            icon: "work",
            title: "Informe de Proyecto",
            course: "Gestión de Proyectos",
            date: "20/10",
            priority: "Baja",
        },
    ];

    return (
        <div
            style={{
                display: "grid",
                gap: "1.5rem",
                gridTemplateColumns: "repeat(3, 1fr)",
                gridTemplateRows: "auto auto auto",
                gridTemplateAreas: `
                    "a b c"
                    "d e e"
                    "f f f"
                `,
            }}
        >
            {/* FILA 1 → 3 columnas */}

            <div style={{ gridArea: "a" }}>
                <InfoCard
                    title="Usuarios activos"
                    icon={FaUser}
                    value="1,230"
                    description="Usuarios en línea hoy"
                />
            </div>

            <div style={{ gridArea: "b" }}>
                <InfoCard
                    title="Avance del proyecto"
                    value="60%"
                    description="Completado hasta la fecha"
                    progress={60}
                />
            </div>

            <div style={{ gridArea: "c" }}>
                <InfoCard
                    title="Avance del proyecto"
                    value="60%"
                    description="Completado hasta la fecha"
                    progress={60}
                />
            </div>

            {/* FILA 2 → 2 columnas */}

            <div style={{ gridArea: "d" }}>
                <InfoCard
                    title="Distribución de horas dedicadas al estudio"
                    description="Horas de estudio semanales"
                    variant="stats"
                    chart={<StudyHoursChart />}
                />
            </div>

            <div style={{ gridArea: "e" }}>
                <InfoCard
                    title="Distribución de horas dedicadas al estudio"
                    description="Horas de estudio semanales"
                    variant="stats"
                    chart={<ActivityLineChart />}
                />
            </div>

            {/* FILA 3 → 1 columna */}

            <div style={{ gridArea: "f" }}>
                <InfoCard
                    title="Actividades pendientes"
                    variant="list"
                    description="Lista de actividades con sus fechas y prioridades"
                    icon={FaTasks}
                    listItems={actividades}
                />
            </div>
        </div>
    );
}
