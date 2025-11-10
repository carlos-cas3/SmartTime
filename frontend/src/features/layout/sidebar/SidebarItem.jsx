import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import MenuItem from "../../../components/Shared/MenuItem";
import SubmenuItem from "../../../components/Shared/SubMenuItem";

import "./SidebarMenu.css";

function SidebarItem({ icon, label, path, children, collapsed, onClick }) {
    const [open, setOpen] = useState(false);
    const hasChildren = children && children.length > 0;
    const location = useLocation();
    const isActive = path && location.pathname === path;

    const handleClick = () => {
        if (onClick) onClick();
        else if (hasChildren) setOpen(!open);
    };

    useEffect(() => {
        if (collapsed) setOpen(false);
    }, [collapsed]);

    return (
        <div>
            <div onClick={handleClick}>
                <MenuItem
                    icon={icon}
                    label={label}
                    path={!hasChildren && !onClick ? path : undefined}
                    showLabel={!collapsed}
                    className="sidebar-item"
                    isActive={isActive} // 👈 Aquí usamos la ruta actual.
                    mode="link"
                />
            </div>

            {hasChildren && open && (
                <div className="submenu">
                    {children.map((child, index) => (
                        <SubmenuItem
                            key={index}
                            icon={child.icon}
                            label={child.label}
                            path={child.path}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default SidebarItem;
