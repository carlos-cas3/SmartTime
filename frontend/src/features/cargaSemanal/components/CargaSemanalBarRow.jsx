import InfoCardStats from "../../../components/UI/InfoCard/InfoCardStats";
import CurseBarChart from "./charts/CurseBarChart";

export default function CargaSemanalBarRow() {
    return (
        <>
            <InfoCardStats
                title="Carga por Curso/Asignatura"
                description="Cantidad de actividades distribuídas por curso"
                chart={<CurseBarChart />}
            />
        </>
    );
}
