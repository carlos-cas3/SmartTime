function SidebarItem({ icon: Icon, label, collapsed, active, onClick }) {
    return (
        <div
            className={`sidebar-item ${active ? "active" : ""}`}
            onClick={onClick}
        >
            <div className="icon-container">
                <Icon className="sidebar-icon" />
            </div>
            {!collapsed && <span className="sidebar-label">{label}</span>}
        </div>
    );
}

export default SidebarItem;
