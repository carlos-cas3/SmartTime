// src/layouts/Layout.jsx
import "../App.css";
import {useState} from "react"

import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { Outlet , useLocation} from "react-router-dom";

function Layout() {

    const location = useLocation()

    const [collapsed, setCollapsed] = useState(false)

    const hideTopbar = location.pathname.includes("calendar")


    return (
        <div className={`dashboard ${collapsed ? "collapsed" : ""} ${hideTopbar ? "no-topbar" : ""}`}>
            <div className="sidebar">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            </div>

            <div className="topbar">
                {!hideTopbar && (
                        <Topbar collapsed={collapsed} setCollapsed={setCollapsed}/>
                )

                }
            </div>

            <div className="content">
                <main>
                    <Outlet />
                </main>
            </div>
        </div>
    );
}

export default Layout;
