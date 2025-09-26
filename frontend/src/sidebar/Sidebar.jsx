import "./Sidebar.css";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";



function Sidebar({ collapsed, setCollapsed }) {
    return (
        <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
            <SidebarHeader collapsed={collapsed} setCollapsed={setCollapsed} />
            <SidebarMenu collapsed={collapsed} />
            <SidebarFooter collapsed={collapsed} />
        </div>
    );
}

export default Sidebar;
