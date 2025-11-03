import InfoCardList from "../../../../components/UI/InfoCard/InfoCardList";
import "./EisenhowerCard.css";

export default function EisenhowerCard({
    title,
    color,
    listItems = [],
    onAction,
}) {
    return (
        <div className={`eisenhower-card ${color}`}>
            <div className="eisenhower-header">
                <h3 className="eisenhower-title">{title}</h3>
                <span className="eisenhower-count">{listItems.length}</span>
            </div>

            {listItems.length > 0 ? (
                <InfoCardList
                    listItems={listItems}
                    showViewMore={true}
                    actionLabel="Ver"
                    onAction={onAction}
                />
            ) : (
                <p className="eisenhower-empty">Sin elementos</p>
            )}
        </div>
    );
}
