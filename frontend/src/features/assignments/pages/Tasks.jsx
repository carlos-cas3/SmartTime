import useTasksData from "../hooks/useTasksData"
import ActivityPage from "./ActivityPage";

export default function Extras() {
    return <ActivityPage  useDataHook={useTasksData} />;
}
