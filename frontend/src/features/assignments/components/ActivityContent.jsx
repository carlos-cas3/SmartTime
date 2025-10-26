import ActivityListContainer from "./ActivityListContainer";
import ActivityMatrixView from "./ActivityMatrixView.jsx";

export default function ActivityContent({ data = [], matrixView = false }) {
    return (
        <div className="activity-content">
            {!matrixView ? (
                <ActivityListContainer items={data} />
            ) : (
                <ActivityMatrixView items={data} />
            )}
        </div>
    );
}
