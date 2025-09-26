import { useState } from "react";
import SidebarItem from "./SidebarItem";

import HomeSidebarIcon from "../assets/home-Sidebar-icon.svg?react";
import CalendarSidebarIcon from "../assets/calendar-Sidebar-icon.svg?react";
import AssignmentsSidebarIcon from "../assets/assignments-Sidebar-icon.svg?react";

function SidebarMenu({ collapsed }) {
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: HomeSidebarIcon, label: "Home" },
        { icon: CalendarSidebarIcon, label: "Calendar" },
        { icon: AssignmentsSidebarIcon, label: "Assignments" },
    ];

    return (
        <div className="sidebar-menu">
            {menuItems.map(({ icon, label }, index) => (
                <SidebarItem
                    key={index}
                    icon={icon}
                    label={label}
                    collapsed={collapsed}
                    active={index == activeIndex}
                    onClick={() => setActiveIndex(index)}
                />
            ))}
        </div>
    );
}
export default SidebarMenu;
