import ActivityItem from "./ActivityItem";
import "./ActivityListContainer.css"

export default function ActivityListContainer({ items }) {
    return (
        <div className="activity-list">
            {items.map((item) => (
                <ActivityItem key={item.id} item={item} />
            ))}
        </div>
    );
}
