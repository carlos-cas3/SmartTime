import Layout from "../layout/Layout";
import Home from "../components/Home/Home";
import Calendar from "../components/calendar/Calendar";
import Assignments from "../components/assignments/Assignments";

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
            }
        ],
    },
];

export default routes;
