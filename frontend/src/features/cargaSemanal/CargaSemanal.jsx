import InfoCardSummary from "../../components/UI/InfoCard/InfoCardSummary.tsx";
import { FaBook, FaTasks, FaCalendarCheck } from "react-icons/fa";
import "./CargaSemanal.css";

function CargaSemanal() {
    return (
        <div className="carga-semanal-rows">
            <h1>Carga Semanal</h1> {/* ← AHORA ARRIBA */}
            <div className="carga-semanal-row row-1">
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
            </div>
        </div>
    );
}

export default CargaSemanal;
