import useExtrasData from "../hooks/useExtrasData"
import ActivityPage from "./ActivityPage";

export default function Extras() {
    return <ActivityPage title="Extras" useDataHook={useExtrasData} />;
}
