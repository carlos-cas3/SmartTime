import { Outlet } from "react-router-dom";

export default function Assignments() {
    return (
        <div>
            <div className="submenu-content">
                <Outlet />
            </div>
        </div>
    );
}
