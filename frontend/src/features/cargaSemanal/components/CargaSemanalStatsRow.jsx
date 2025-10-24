import InfoCardSummary from "../../../components/UI/InfoCard/InfoCardSummary";
import { FaBook, FaTasks, FaCalendarCheck } from "react-icons/fa";

export default function CargaSemanalStatsRow() {
    return (
        <>
        <InfoCardSummary
                    icon={<FaBook />}
                    tag="Esta semana"
                    description="Promedio general"
                    value="18.4"
                    progress={75}
                />
                <InfoCardSummary
                    icon={<FaCalendarCheck />}
                    description="Asistencias de hoy"
                    value="92%"
                    progress={92}
                />
                <InfoCardSummary
                    icon={<FaTasks />}
                    tag="Pendientes"
                    description="Tareas por entregar"
                    value="4"
                />
                <InfoCardSummary
                    icon={<FaTasks />}
                    tag="Pendientes"
                    description="Tareas por entregar"
                    value="4"
                />
        </>
    )
}
