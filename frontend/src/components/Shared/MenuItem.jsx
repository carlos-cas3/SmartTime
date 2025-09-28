import { NavLink } from "react-router-dom";
import "./MenuItem.css"

function MenuItem({
    icon: Icon,
    label,
    path,
    onClick,
    showLabel = true,
    extraContent,
}) {
    const content = (
        <>
            {Icon && (
                <div className="icon-container">
                    <Icon className="menu-icon" />
                </div>
            )}
            {showLabel && label && <span className="menu-label">{label}</span>}
            {extraContent && (
                <div className="extra-content">{extraContent}</div>
            )}
        </>
    );

    if (path) {
        return (
            <NavLink
                to={path}
                className={({ isActive }) =>
                    `menu-item ${isActive ? "active" : ""}`
                }
            >
                {content}
            </NavLink>
        );
    }

    return (
        <div className="menu-item" onClick={onClick}>
            {content}
        </div>
    );
}

export default MenuItem;
