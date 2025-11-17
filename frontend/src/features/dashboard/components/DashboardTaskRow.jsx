import { FaBookOpen } from "react-icons/fa";
import InfoCardList from "../../../components/UI/InfoCard/InfoCardList";
import useAllData from "../../assignments/hooks/useAllData";

export default function DashboardTaskRow() {
    const pendingItems = useAllData({ status: "pending" }).slice(0, 5);

    const listItems = pendingItems.map((item) => ({
        icon: item.icon,
        title: item.title,
        course: item.category,
        date: item.date,
        priority: item.priority,
        type: item.type,
    }));

    return (
        <InfoCardList
            title="Tareas Pendientes"
            icon={<FaBookOpen />}
            description="Actividades programadas para esta semana"
            listItems={listItems}
            showViewMore={true}
        />
    );
}
