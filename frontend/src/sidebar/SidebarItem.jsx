import { NavLink } from "react-router-dom";

function SidebarItem({ icon: Icon, label, collapsed, path, onClick }) {
    if (path) {
        // Modo Link con NavLink
        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `sidebar-item ${isActive ? "active" : ""}`
                }
            >
                <div className="icon-container">
                    <Icon className="sidebar-icon" />
                </div>
                {!collapsed && <span className="sidebar-label">{label}</span>}
            </NavLink>
        );
    }

    // Modo botón (ej: Cerrar Sesión)
    return (
        <div className="sidebar-item" onClick={onClick}>
            <div className="icon-container">
                <Icon className="sidebar-icon" />
            </div>
            {!collapsed && <span className="sidebar-label">{label}</span>}
        </div>
    );
}

export default SidebarItem;
