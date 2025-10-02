import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import MenuItem from "../components/Shared/MenuItem";
import SubmenuItem from "./SubMenuItem";

function SidebarItem({ icon, label, path, children, collapsed, onClick }) {
    const [open, setOpen] = useState(false);
    const hasChildren = children && children.length > 0;

    const handleClick = () => {
        if (onClick) {
            onClick(); // 🔴 si es botón como Cerrar Sesión
        } else if (hasChildren) {
            setOpen(!open);
        }
    };

    return (
        <div>
            <div onClick={handleClick}>
                <MenuItem
                    icon={icon}
                    label={label}
                    path={!hasChildren && !onClick ? path : undefined} // solo path si no es botón
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
