import ActivityListContainer from "./ActivityList/ActivityListContainer";
import ActivityMatrixView from "./ActivityMatrix/ActivityMatrixView.jsx";

export default function ActivityContent({
    data = [],
    matrixView = false,
    onAction,
    openDropdownId,
    onToggleDropdown,
    onCloseDropdown,
}) {
    const groupedData = matrixView
        ? {
            doFirst: data.filter(
                (item) => item.matriz === "Urgente e Importante"
            ),
            schedule: data.filter(
                (item) => item.matriz === "Urgente y No Importante"
            ),
            delegate: data.filter(
                (item) => item.matriz === "No Urgente e Importante"
            ),
            eliminate: data.filter(
                (item) => item.matriz === "No Urgente y No Importante"
            ),
        }
        : null;

    return (
        <div className="activity-content">
            {!matrixView ? (
                <ActivityListContainer
                    items={data}
                    onAction={onAction}
                    openDropdownId={openDropdownId}
                    onToggleDropdown={onToggleDropdown}
                    onCloseDropdown={onCloseDropdown}
                />
            ) : (
                <ActivityMatrixView
                    items={groupedData}
                    onAction={onAction}
                    // onCloseDropdown={handleCloseDropdown}
                />
            )}
        </div>
    );
}
