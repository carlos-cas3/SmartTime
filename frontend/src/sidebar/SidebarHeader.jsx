import ToggleRightIcon from "../assets/toggleRight-Sidebar-icon.svg?react";
import ToggleLeftIcon from "../assets/toggleLeft-Sidebar-icon.svg?react";

function SidebarHeader({ collapsed, setCollapsed }) {
    return (
        <div className="sidebar-header">
            <div className="logo-section">
                <img src="./src/assets/logo.png" alt="Logo" className="logo" />
                {!collapsed && <span className="app-name">SmartTime</span>}
            </div>

            <div className="button-content">
                {!collapsed && (
                    <button
                        onClick={() => setCollapsed(true)}
                        className="toggle-button"
                        aria-label="Colapsar Sidebar"
                    >
                        <ToggleRightIcon className="toggle-icon" />
                    </button>
                )}

                {collapsed && (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="toggle-button"
                        aria-label="Expandir Sidebar"
                    >
                        <ToggleLeftIcon className="toggle-icon" />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SidebarHeader;
