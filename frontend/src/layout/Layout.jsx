// src/layouts/Layout.jsx
import "../App.css";
import {useState} from "react"

import Sidebar from "../sidebar/Sidebar";
import Topbar from "../topbar/Topbar";
import { Outlet } from "react-router-dom";

function Layout() {

    const [collapsed, setCollapsed] = useState(false)
    return (
        <div className={`dashboard ${collapsed ? "collapsed" : ""}`}>
            <div className="sidebar">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed}/>
            </div>

            <div className="topbar">
                <Topbar collapsed={collapsed} setCollapsed={setCollapsed}/>
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
