import SidebarItem from "./SidebarItem";

import SingOutSidebarIcon from "../assets/signOut-Sidebar-icon.svg?react";

function SidebarFooter({ collapsed }) {
    const footerItems = [
        {
            icon: SingOutSidebarIcon,
            label: "Cerrar Sesión",
            action: () => {
                window.location.href = "/login";
            },
        },
    ];

    return (
        <div className="sidebar-footer">
            {footerItems.map(({ icon, label, action }, index) => (
                <SidebarItem
                    key={index}
                    icon={icon}
                    label={label}
                    collapsed={collapsed}
                    active={false}
                    onClick={action}
                />
            ))}
        </div>
    );
}
export default SidebarFooter;
