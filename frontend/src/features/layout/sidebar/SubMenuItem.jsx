import { NavLink } from "react-router-dom";

function SubMenuItem({ icon: Icon, label, path }) {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
            }
        >
            <div className="icon-container">
                <Icon className="sidebar-icon" />
            </div>
            <span className="submenu-label">{label}</span>
        </NavLink>
    );
}

export default SubMenuItem;
