// components/assignments/Assignments.jsx
import { Outlet, Link } from "react-router-dom";

export default function Assignments() {
    return (
        <div>
            <div className="submenu-content">
                <Outlet /> {/* Aquí se renderizan los hijos */}
            </div>
        </div>
    );
}
