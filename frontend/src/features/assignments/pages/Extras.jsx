import useExtrasData from "../hooks/useExtrasData"
import ActivityPage from "../ActivityPage";

export default function Extras() {
    return <ActivityPage  useDataHook={useExtrasData} />;
}
