import { FaBookOpen, FaTasks, FaUser } from "react-icons/fa";

import InfoCard from "../../components/UI/InfoCard";

import "./Dashboard.css";

import StudyHoursChart from "./components/StudyHoursChart";
import ActivityLineChart from "./components/ActivityLineChart";
import InfoCardList from "../../components/UI/InfoCard/InfoCardList";
import InfoCardStats from "../../components/UI/InfoCard/InfoCardStats";

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
                    variant="simple"
                    icon={FaUser}
                    title="Avance del proyecto"
                    value="60%"
                    description="Completado hasta la fecha"
                    progress={60}
                />
            </div>

            {/* FILA 2 → 2 columnas */}
            <div className="dashboard-row row-2">
                <InfoCardStats
                    title="Distribución de horas dedicadas al estudio"
                    description="Horas de estudio semanales"
                    chart={<StudyHoursChart />}
                />
                <InfoCardStats
                    title="Progreso de actividad"
                    description="Tendencia semanal de productividad"
                    chart={<ActivityLineChart />}
                />
            </div>

            {/* FILA 3 → 1 columna */}
            <div className="dashboard-row row-1">
                <InfoCardList
                    title="Tareas pendientes"
                    icon={<FaBookOpen />}
                    description="Actividades programadas para esta semana"
                    listItems={[
                        {
                            icon: "work",
                            title: "Reunión de proyecto",
                            date: "21/10",
                            priority: "Alta",
                        },
                        {
                            icon: "book",
                            title: "Revisar documentación",
                            date: "22/10",
                            priority: "Media",
                        },
                        {
                            icon: "code",
                            title: "Implementar API",
                            date: "23/10",
                            priority: "Baja",
                        },
                    ]}
                />
            </div>
        </div>
    );
}
