import { FaTasks, FaUser } from "react-icons/fa";

import InfoCard from "../../components/UI/InfoCard";

import "./Dashboard.css";

import StudyHoursChart from "./components/StudyHoursChart";
import ActivityLineChart from "./components/ActivityLineChart";

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
        <div className="dashboard-rows">
            <div className="dashboard-row row-3">
                {/* FILA 1 → 3 columnas */}
                <InfoCard
                    title="Usuarios activos"
                    icon={FaUser}
                    value="1,230"
                    description="Usuarios en línea hoy"
                />
                <InfoCard
                    title="Avance del proyecto"
                    icon={FaUser}
                    value="60%"
                    description="Completado hasta la fecha"
                    progress={60}
                />
                <InfoCard
                    variant="simple" // ✅ usa simple para que pase por InfoCardSimple
                    icon={FaUser}
                    title="Avance del proyecto"
                    value="60%"
                    description="Completado hasta la fecha"
                    progress={60}
                />
            </div>

            {/* FILA 2 → 2 columnas */}
            <div className="dashboard-row row-2">
                <InfoCard
                    title="Distribución de horas dedicadas al estudio"
                    description="Horas de estudio semanales"
                    variant="stats"
                    chart={<StudyHoursChart />}
                />
                <InfoCard
                    title="Distribución de horas dedicadas al estudio"
                    description="Horas de estudio semanales"
                    variant="stats"
                    chart={<ActivityLineChart />}
                />
            </div>

            {/* FILA 3 → 1 columna */}
            <div className="dashboard-row row-1">
                <InfoCard
                    title="Actividades pendientes"
                    description="Lista de actividades con sus fechas y prioridades"
                    variant="list"
                    icon={FaTasks}
                    listItems={actividades}
                />
            </div>
        </div>
    );
}
