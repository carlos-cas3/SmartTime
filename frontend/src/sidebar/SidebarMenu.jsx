import HomeSidebarIcon from "../assets/home-Sidebar-icon.svg?react";
import CalendarSidebarIcon from "../assets/calendar-Sidebar-icon.svg?react";
import AssignmentsSidebarIcon from "../assets/assignments-Sidebar-icon.svg?react";
import SidebarItem from "./SidebarItem";

function SidebarMenu({ collapsed }) {
    const menuItems = [
        { icon: HomeSidebarIcon, label: "Home", path: "/home" },
        { icon: CalendarSidebarIcon, label: "Calendar", path: "/calendar" },
        {
            icon: AssignmentsSidebarIcon,
            label: "Assignments",
            path: "/assignments",
        },
    ];

    return (
        <div className="sidebar-menu">
            {menuItems.map(({ icon, label, path }, index) => (
                <SidebarItem
                    key={index}
                    icon={icon}
                    label={label}
                    path={path}
                    collapsed={collapsed}
                />
            ))}
        </div>
    );
}

export default SidebarMenu;
