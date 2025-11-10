import { NavLink } from "react-router-dom";

import "./SubMenuItem.css"

function SubMenuItem({ icon: Icon, label, path }) {
    return (
        <NavLink
            to={path}
            className={({ isActive }) =>
                `submenu-item ${isActive ? "active" : ""}`
            }
        >
                <Icon className="menu-icon" />
                <span className="menu-label">{label}</span>
        </NavLink>
    );
}

export default SubMenuItem;
