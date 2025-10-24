import ActivityPieChart from "./ActivityPieChart";
import AcademicVsExtra from "./AcademicVsExtra";
import InfoCardStats from "../../../components/UI/InfoCard/InfoCardStats";

export default function CargaSemanalChartsRow() {
    return (
        <>
            <InfoCardStats
                title="Distribución de actividad"
                description="Porcentaje de tiempo dedicado a cada actividad"
                chart={<ActivityPieChart />}
            />
            <InfoCardStats
                title="Actividades académicas vs extracurriculares"
                description="Comparativa de horas dedicadas"
                chart={<AcademicVsExtra />}
            />
        </>
    );
}
