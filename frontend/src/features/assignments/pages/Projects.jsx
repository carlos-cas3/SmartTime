import useProjectsData from "../hooks/useProjectsData"
import ActivityPage from "./ActivityPage";

export default function Extras() {
    return <ActivityPage title="Projectos" useDataHook={useProjectsData} />;
}
