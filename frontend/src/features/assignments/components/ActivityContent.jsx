import ActivityListContainer from "./ActivityListContainer";
import ActivityMatrixView from "./ActivityMatrixView.jsx";

export default function ActivityContent({ data = [], matrixView = false , onAction}) {
    return (
        <div className="activity-content">
            {!matrixView ? (
                <ActivityListContainer items={data} onAction={onAction}/>
            ) : (
                <ActivityMatrixView items={data} />
            )}
        </div>
    );
}
