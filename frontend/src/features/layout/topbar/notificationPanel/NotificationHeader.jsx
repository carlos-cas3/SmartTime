export default function NotificationHeader({ total }) {
    return (
        <div className="np-header">
            <h4>Notificaciones</h4>
            <span className="np-count">{total}</span>
        </div>
    );
}
