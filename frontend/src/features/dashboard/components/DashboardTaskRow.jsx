import { FaBookOpen } from "react-icons/fa";

import InfoCardList from "../../../components/UI/InfoCard/InfoCardList";

export default function DashboardTaskRow() {

    const listItems=[
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
                    ]
    return (

        <InfoCardList
            title="Tareas Pendientes"
            icon={<FaBookOpen/>}
            description="Actividades programadas para esta semana"
            listItems={listItems}

        />

    )
}