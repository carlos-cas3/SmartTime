import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userTopbarIcon from "../../../assets/user-Topbar-icon.svg?react";
import notificationTopbarIcon from "../../../assets/notifications-Topbar-icon.svg?react";
import settingsTopbarIcon from "../../../assets/settings-Topbar-icon.svg?react";
import MenuItem from "../../../components/Shared/MenuItem";
import "./TopbarMenu.css";

export default function TopbarMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    // Controla el activo global
    const [activeItem, setActiveItem] = useState<string | null>(null);

    const user = {
        name: "Juan Pérez",
        email: "juanperez@email.com",
    };

    const handleItemClick = (itemName: string, path?: string) => {
        setActiveItem((prev) => (prev === itemName ? null : itemName));
        if (path) {
            navigate(path);
        }
    };

    const menuItems = [
        {
            name: "notifications",
            icon: notificationTopbarIcon,
            badgeCount: 3,
            onClick: () => handleItemClick("notifications"),
        },
        {
            name: "settings",
            icon: settingsTopbarIcon,
            label: "Settings",
            path: "/settings",
            onClick: () => handleItemClick("settings", "/settings"),
        },
        {
            name: "profile",
            icon: userTopbarIcon,
            path: "/profile",
            onClick: () => handleItemClick("profile", "/profile"),
            extraContent: (
                <div className="profile-info">
                    <span className="profile-name">{user.name}</span>
                    <span className="profile-email">{user.email}</span>
                </div>
            ),
        },
    ];

    return (
        <div className="topbar-menu">
            {menuItems.map((item, index) => {
                const isRouteActive =
                    location.pathname === item.path &&
                    activeItem !== "notifications";
                const isManualActive = activeItem === item.name;

                return (
                    <MenuItem
                        key={index}
                        {...item}
                        showLabel={false}
                        isActive={isManualActive || isRouteActive}
                        mode="action"
                    />
                );
            })}
        </div>
    );
}
