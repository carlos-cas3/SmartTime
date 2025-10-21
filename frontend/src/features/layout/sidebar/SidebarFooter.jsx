// SidebarFooter.jsx
import { useNavigate } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import SingOutSidebarIcon from "../../../assets/signOut-Sidebar-icon.svg?react";

function SidebarFooter({ collapsed }) {
    const navigate = useNavigate();

    const footerItems = [
        {
            icon: SingOutSidebarIcon,
            label: "Cerrar Sesión",
            onClick: () => {
                // aquí podrías limpiar tokens/localStorage
                navigate("/login"); // 👈 navegación SPA
            },
        },
    ];

    return (
        <div className="sidebar-footer">
            {footerItems.map(({ icon, label, onClick }, index) => (
                <SidebarItem
                    key={index}
                    icon={icon}
                    label={label}
                    collapsed={collapsed}
                    onClick={onClick} // pasa la función
                />
            ))}
        </div>
    );
}

export default SidebarFooter;
