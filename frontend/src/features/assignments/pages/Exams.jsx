import useExamsData from "../hooks/useExamsData";
import ActivityPage from "../ActivityPage";

export default function Exams() {
    return <ActivityPage useDataHook={useExamsData} />;
}
