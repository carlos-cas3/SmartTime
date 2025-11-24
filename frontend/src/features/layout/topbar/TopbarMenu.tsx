import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import userTopbarIcon from "../../../assets/user-Topbar-icon.svg?react";
import notificationTopbarIcon from "../../../assets/notifications-Topbar-icon.svg?react";
import settingsTopbarIcon from "../../../assets/settings-Topbar-icon.svg?react";

import MenuItem from "../../../components/Shared/MenuItem";
import NotificationPanel from "./notificationPanel/NotificationPanel";

import "./TopbarMenu.css";

import useNotificationData from "./notificationPanel/useNotificationData";
import { defaultSettings } from "./notificationPanel/notificationSettings";

export default function TopbarMenu() {
    const location = useLocation();
    const navigate = useNavigate();

    const [activeItem, setActiveItem] = useState(null);

    const storedSettings = localStorage.getItem("notif-settings");
    const settings = storedSettings
        ? JSON.parse(storedSettings)
        : defaultSettings;

    const { total } = useNotificationData(settings);

    const panelRef = useRef(null);
    const notifButtonRef = useRef(null);

    const user = {
        name: "Juan Pérez",
        email: "juanperez@email.com",
    };

    const handleItemClick = (itemName, path) => {
        setActiveItem((prev) => (prev === itemName ? null : itemName));
        if (path) navigate(path);
    };

    useEffect(() => {
        function handleClickOutside(e) {
            const clickedPanel =
                panelRef.current && panelRef.current.contains(e.target);

            const clickedButton =
                notifButtonRef.current &&
                notifButtonRef.current.contains(e.target);

            if (!clickedPanel && !clickedButton) {
                setActiveItem(null);
            }
        }

        if (activeItem === "notifications") {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [activeItem]);

    const menuItems = [
        {
            name: "notifications",
            icon: notificationTopbarIcon,
            badgeCount: total,
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
                    <div key={index} className="menu-item-wrapper">
                        <MenuItem
                            {...item}
                            ref={
                                item.name === "notifications"
                                    ? notifButtonRef
                                    : null
                            }
                            showLabel={false}
                            isActive={isManualActive || isRouteActive}
                            mode="action"
                        />

                        {item.name === "notifications" &&
                            activeItem === "notifications" && (
                                <div
                                    className="notification-panel-wrapper"
                                    ref={panelRef}
                                >
                                    <NotificationPanel />
                                </div>
                            )}
                    </div>
                );
            })}
        </div>
    );
}
