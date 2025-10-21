import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../../../components/Shared/MenuItem";
import SubmenuItem from "./SubMenuItem";

function SidebarItem({ icon, label, path, children, collapsed, onClick }) {
    const [open, setOpen] = useState(false);
    const hasChildren = children && children.length > 0;

    const handleClick = () => {
        if (onClick) {
            onClick(); // 🔴 para botones como "Cerrar sesión"
        } else if (hasChildren) {
            setOpen(!open);
        }
    };

    // 🔹 Cierra automáticamente el submenu cuando el sidebar se colapsa
    useEffect(() => {
        if (collapsed) {
            setOpen(false);
        }
    }, [collapsed]);

    return (
        <div>
            <div onClick={handleClick}>
                <MenuItem
                    icon={icon}
                    label={label}
                    path={!hasChildren && !onClick ? path : undefined}
                    showLabel={!collapsed}
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
