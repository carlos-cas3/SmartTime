import HomeSidebarIcon from "../../../assets/home-Sidebar-icon.svg?react";
import CalendarSidebarIcon from "../../../assets/calendar-Sidebar-icon.svg?react";
import AssignmentsSidebarIcon from "../../../assets/assignments-Sidebar-icon.svg?react";

import ExamSidebarIcon from "../../../assets/examIcon-SidebarMenu.svg?react";
import ExtraSidebarIcon from "../../../assets/extraIcon-SidebarMenu.svg?react";
import ProjectSidebarIcon from "../../../assets/projectIcon-SidebarMenu.svg?react";
import TaskSidebarIcon from "../../../assets/taskIcon-SidebarMenu.svg?react";

import ReportIcon from "../../../assets/reportIcon-SidebarMenu.svg?react";
import WeeklyLoad from "../../../assets/weeklyLoadIcon-SidebarMenu.svg?react";

import SidebarItem from "./SidebarItem";

function SidebarMenu({ collapsed }) {
    const menuItems = [
        { icon: HomeSidebarIcon, label: "Dashboard", path: "/dashboard" },
        { icon: CalendarSidebarIcon, label: "Calendario", path: "/calendario" },
        {
            icon: AssignmentsSidebarIcon,
            label: "Actividades",
            path: "/actividades",
            children: [
                { icon: TaskSidebarIcon, label: "Tareas", path: "/actividades/tareas" },
                { icon: ExamSidebarIcon, label: "Exámenes", path: "/actividades/examenes" },
                { icon: ProjectSidebarIcon, label: "Proyectos", path: "/actividades/proyectos" },
                { icon: ExtraSidebarIcon, label: "Extras", path: "/actividades/extras" },
            ],
        },

        { icon: WeeklyLoad, label: "Carga Semanal", path: "/cargaSemanal" },
        { icon: ReportIcon, label: "Reportes", path: "/reportes" }
    ];

    return (
        <div className="sidebar-menu">
            {menuItems.map(({ icon, label, path , children}, index) => (
                <SidebarItem
                    key={index}
                    icon={icon}
                    label={label}
                    path={path}
                    collapsed={collapsed}
                    children={children}
                />
            ))}
        </div>
    );
}

export default SidebarMenu;
