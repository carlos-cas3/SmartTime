import { useState } from "react";
import userTopbarIcon from "../../../assets/user-Topbar-icon.svg?react";
import notificationTopbarIcon from "../../../assets/notifications-Topbar-icon.svg?react";
import settingsTopbarIcon from "../../../assets/settings-Topbar-icon.svg?react";
import MenuItem from "../../../components/Shared/MenuItem";
import "./TopbarMenu.css";

export default function TopbarMenu() {
    const [isNotificationOpen, setIsNotificationOpen] = useState(false);
    

    const user = {
        name: "Juan Pérez",
        email: "juanperez@email.com",
    };

    const menuItems = [
        {
            icon: notificationTopbarIcon,
            badgeCount: 3,
            onClick: () => setIsNotificationOpen((prev) => !prev),
            isActive: isNotificationOpen, 
        },
        {
            icon: settingsTopbarIcon,
            label: "Settings",
            path: "/settings",
        },
        {
            icon: userTopbarIcon,
            path: "/profile",
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
            {menuItems.map((item, index) => (
                <MenuItem key={index} {...item} showLabel={false} />
            ))}
        </div>
    );
}
