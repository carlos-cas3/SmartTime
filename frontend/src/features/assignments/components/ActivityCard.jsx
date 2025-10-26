
export default function ActivityCard({ icon, title, subtitle, status, date }) {
    return (
        <div className="activity-card">
            <div className="activity-icon">{icon}</div>

            <div className="activity-info">
                <h3>{title}</h3>
                <p>{subtitle}</p>

                <div className="activity-meta">
                    <span className={`status ${status}`}>{status}</span>
                    <span className="date">{date}</span>
                </div>
            </div>
        </div>
    );
}
