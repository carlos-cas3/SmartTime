import { FaUser } from "react-icons/fa";

import InfoCardSimple from "../../../components/UI/InfoCard/InfoCardSimple";

export default function DashboardStatsRow() {
    return (
        <>
            <InfoCardSimple
                title="Usuarios activos"
                icon={<FaUser />}
                value="1,230"
                description="Usuarios en línea hoy"
            />

            <InfoCardSimple
                title="Avance del proyecto"
                icon={<FaUser />}
                value="60%"
                description="Completado hasta la fecha"
                progress={60}
            />

            <InfoCardSimple
                icon={<FaUser />}
                title="Avance del proyecto"
                value="60%"
                description="Completado hasta la fecha"
                progress={60}
            />
        </>
    );
}
