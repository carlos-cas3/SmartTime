import InfoCard from "../../components/UI/InfoCard";
import { FaBookOpen, FaCheckCircle, FaClock } from "react-icons/fa";
import { IoAlertCircle } from "react-icons/io5";
import "./CargaSemanal.css";

function CargaSemanal() {
    return (
        <div className="carga-semanal-rows">
            <div className="carga-semanal-row row-1">
                <InfoCard
                    variant="summary"
                    value="25"
                    description="Total de Actividades"
                    icon={FaBookOpen}
                    progress={100}
                />
                <InfoCard
                    variant="summary"
                    value="13"
                    description="Completadas"
                    icon={FaCheckCircle}
                    progress={50}
                />
                <InfoCard
                    variant="summary"
                    value="12"
                    description="Pendientes"
                    icon={FaClock}
                    progress={30}
                />
                <InfoCard
                    variant="summary"
                    value="5"
                    description="Atrasadas"
                    icon={IoAlertCircle}
                    progress={10}
                />
            </div>

            <h1>Carga Semanal</h1>
        </div>
    );
}

export default CargaSemanal;
