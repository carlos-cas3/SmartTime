import ActivityListContainer from "./ActivityListContainer";
import ActivityMatrixView from "./ActivityMatrixView.jsx";

export default function ActivityContent({
    data = [],
    matrixView = false,
    onAction,
    openDropdownId,
    onToggleDropdown,
    onCloseDropdown,
}) {
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
                <ActivityMatrixView items={data} 
                // onCloseDropdown={handleCloseDropdown}
                />
            )}
        </div>
    );
}
