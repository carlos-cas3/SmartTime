import NotificationCardList from "./NotificationCardList";

export default function NotificationSection({ title, items, sectionType }) {
    if (items.length === 0) return null;

    return (
        <div className={`np-section np-section-${sectionType}`}>
            <h5 className="np-section-title">{title}</h5>

            <div className="np-section-content">
                <NotificationCardList
                    listItems={items}
                    sectionType={sectionType}
                    showViewMore={true}
                />
            </div>
        </div>
    );
}
