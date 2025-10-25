import InfoCardStats from "../../../components/UI/InfoCard/InfoCardStats";
import ActivityPendingXDayBarChart from "./ActivityPendingXDayBarChart";
import ProductivityChart from "./ProductivityChart";

export default function ReportsChartsRow() {
    return (
        <>
            <InfoCardStats
            title="Reporte Semanal"
            description="Comparación de actividades completadas vs pendientes por día"
            chart={<ActivityPendingXDayBarChart/>}
            />

            <InfoCardStats
            title="Resumen de Productividad"
            description="Análisis de tu rendimiento semanal"
            chart={<ProductivityChart/>}
            />
        </>
    );
}
