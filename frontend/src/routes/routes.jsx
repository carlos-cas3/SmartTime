import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Calendar from "../pages/Calendar";
import Assignments from "../components/assignments/Assignments";

import Profile from "../components/profile/Profile";
import Settings from "../components/settings/Settings";
import Notifications from "../components/notifications/Notifications"

import Login from "../components/login/Login";
import Register from "../components/register/Register";

import Exams from "../components/assignments/exams/Exams";
import Extras from "../components/assignments/extras/Extras";
import Projects from "../components/assignments/projects/Projects";
import Tasks from "../components/assignments/tasks/Tasks";


import WeeklyLoad from "../components/weeklyLoad/WeeklyLoad";
import Reports from "../components/reports/Reports";



const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "dashboard",
                element: <Home />,
            },
            {
                path: "calendario",
                element: <Calendar />,
            },
            {
                path: "actividades",
                element: <Assignments/>,
                children: [
                    {
                        path: "examenes",
                        element: <Exams/>
                    },
                    {
                        path: "extras",
                        element: <Extras/>
                    },
                    {
                        path: "proyectos",
                        element: <Projects/>
                    },
                    {
                        path: "tareas",
                        element: <Tasks/>
                    }
                ]
            },
            {
                path: "profile",
                element: <Profile/>
            },
            {
                path: "settings",
                element: <Settings/>
            },
            {
                path: "notifications",
                element: <Notifications/>
            },
            {
                path: "cargaSemanal",
                element: <WeeklyLoad/>
            },
            {
                path: "reportes",
                element: <Reports/>
            }
        ],
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/register",
        element: <Register/>
    }
];

export default routes;
