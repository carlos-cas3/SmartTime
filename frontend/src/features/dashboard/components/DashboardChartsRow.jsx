import InfoCardStats from "../../../components/UI/InfoCard/InfoCardStats";

import StudyHoursChart from "./StudyHoursChart";
import ActivityLineChart from "./ActivityLineChart";

export default function DashboardChartsRow() {
    return (
        <>   
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
        </>
    )
}

