// src/layouts/Layout.jsx
import "../../app/App.css";
import { useState } from "react";
import Sidebar from "../layout/sidebar/Sidebar";
import Topbar from "../layout/topbar/Topbar";
import { Outlet, useLocation } from "react-router-dom";

function Layout() {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(false);

    const hideTopbar = location.pathname.includes("calendar");
    const isLoginPage = location.pathname === "/login"; // 👈 check

    if (isLoginPage) {
        // 🔴 NO muestres sidebar ni topbar en /login
        return (
            <div className="login-wrapper">
                <Outlet />
            </div>
        );
    }

    return (
        <div
            className={`dashboard ${collapsed ? "collapsed" : ""} ${
                hideTopbar ? "no-topbar" : ""
            }`}
        >
            <div className="sidebar">
                <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
            </div>

            <div className="topbar">
                {!hideTopbar && (
                    <Topbar collapsed={collapsed} setCollapsed={setCollapsed} />
                )}
            </div>

            <div className="content">
                    <Outlet />
            </div>
        </div>
    );
}

export default Layout;
