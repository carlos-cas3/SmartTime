import Layout from "../layout/Layout";
import Dashboard from "../features/dashboard/Dashboard";
import Calendar from "../pages/Calendar";
import Assignments from "../features/assignments/Assignments";

import Profile from "../features/profile/Profile";
import Settings from "../features/settings/Settings";
import Notifications from "../features/notifications/Notifications";
import Reports from "../features/reports/Reports";
import Login from "../features/auth/login/Login";
import Register from "../features/auth/register/Register";

import Exams from "../features/assignments/exams/Exams";
import Extras from "../features/assignments/extras/Extras";
import Projects from "../features/assignments/projects/Projects";
import Tasks from "../features/assignments/tasks/Tasks";


import CargaSemanal from "../features/cargaSemanal/CargaSemanal";

import EditProfile from "../features/editprofile/EditProfile";



const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "dashboard",
                element: <Dashboard />,
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
                element: <CargaSemanal/>
            },
            {
                path: "reportes",
                element: <Reports/>
            },
            {
                path: "editProfile",
                element: <EditProfile/>
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
