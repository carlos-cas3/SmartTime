import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Calendar from "../pages/Calendar";
import Assignments from "../components/assignments/Assignments";

import Profile from "../components/profile/Profile";
import Settings from "../components/settings/Settings";
import Notifications from "../components/notifications/Notifications"

import Login from "../components/login/Login";

const routes = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "home",
                element: <Home />,
            },
            {
                path: "calendar",
                element: <Calendar />,
            },
            {
                path: "assignments",
                element: <Assignments/>
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
            }
        ],
    },
    {
        path: "/login",
        element: <Login/>
    }
];

export default routes;
