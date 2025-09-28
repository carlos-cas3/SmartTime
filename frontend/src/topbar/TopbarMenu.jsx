import UserTopbarIcon from "../assets/user-Topbar-icon.svg?react";
import SettingsTopbarIcon from "../assets/settings-Topbar-icon.svg?react";
import NotificationTopbarIcon from "../assets/notifications-Topbar-icon.svg?react"

import TopbarItem from "./TopbarItem";

function TopbarMenu() {
    const menuItems = [
        {
            icon: NotificationTopbarIcon,
            label: "",
            path: "/notifications",
        },
        {
            icon: SettingsTopbarIcon,
            label: "",
            path: "/settings", // ruta hacia ajustes
        },
        
        
        // si quisieras uno con acción en vez de path
        // {
        //     icon: LogoutTopbarIcon,
        //     label: "Cerrar sesión",
        //     onClick: () => console.log("Cerrar sesión"),
        // },
        {
            icon: UserTopbarIcon,
            label: "", // lo dejamos vacío porque no es solo un texto simple
            path: "/profile",
            extraContent: (
                <div className="profile-info">
                    <span className="profile-name">Juan Pérez</span>
                    <span className="profile-email">juanperez@email.com</span>
                </div>
            ),
        },
    ];

    return (
        <div className="topbar-menu">
            {menuItems.map((item, index) => (
                <TopbarItem
                    key={index}
                    icon={item.icon}
                    label={item.label}
                    path={item.path}
                    onClick={item.onClick}
                    extraContent={item.extraContent}
                />
            ))}
        </div>
    );
}

export default TopbarMenu;
