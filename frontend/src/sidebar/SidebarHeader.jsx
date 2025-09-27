import splitOutHorizontal from "../assets/split-out-horizontal.svg";
import toggleRight from "../assets/toggleRight-Sidebar-icon.svg"

function SidebarHeader({ collapsed, setCollapsed }) {
    return (
        <div className="sidebar-header">
            <div className="logo-section">
                <img src="./src/assets/logo.png" alt="Logo" className="logo" />
                {!collapsed && <span className="app-name">SmartTime</span>}
            </div>

            {!collapsed && (
                <button
                    onClick={() => setCollapsed(true)}
                    className="toggle-button"
                    aria-label="Toggle Sidebar"
                >
                    <img
                        src={toggleRight}
                        alt="Expand"
                        className="toggle-icon"
                    />
                </button>
            )}
        </div>
    );
}

export default SidebarHeader;
