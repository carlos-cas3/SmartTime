import { NavLink } from "react-router-dom";
import "./MenuItem.css";

interface MenuItemProps {
    icon?: React.ElementType;
    label?: string;
    path?: string;
    onClick?: () => void;
    showLabel?: boolean;
    extraContent?: React.ReactNode;
    badgeCount?: number;
    className?: string;
    isActive?: boolean;
    mode?: "link" | "action";
}

export default function MenuItem({
    icon: Icon,
    label,
    path,
    onClick,
    showLabel = true,
    extraContent,
    badgeCount = 0,
    className = "",
    isActive = false,
    mode = "link",
}: MenuItemProps) {
    const content = (
        <>
            {Icon && (
                <div className="icon-container">
                    <Icon className="menu-icon" />
                    {badgeCount > 0 && (
                        <span className="badge">{badgeCount}</span>
                    )}
                </div>
            )}

            {(extraContent || (showLabel && label)) && (
                <div className="content">
                    {extraContent ? (
                        <div className="extra-content">{extraContent}</div>
                    ) : (
                        <span className="menu-label">{label}</span>
                    )}
                </div>
            )}
        </>
    );

    if (mode === "action") {
        // 🔹 Modo Topbar: controlado manualmente
        return (
            <div
                className={`menu-item ${className} ${
                    isActive ? "is-active" : ""
                }`}
                onClick={onClick}
            >
                {content}
            </div>
        );
    }

    return (
        <NavLink
            to={path || "#"}
            className={({ isActive: navIsActive }) =>
                `menu-item ${className} ${navIsActive ? "is-active" : ""}`
            }
        >
            {content}
        </NavLink>
    );
}
