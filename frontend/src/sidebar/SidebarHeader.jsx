import toggleRight from "../assets/toggleRight-Sidebar-icon.svg";
import toggleLeft from "../assets/toggleLeft-Sidebar-icon.svg";

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
                        <img
                            src={toggleRight}
                            alt="Colapsar"
                            className="toggle-icon"
                        />
                    </button>
                )}

                {/* Botón cuando está colapsado */}
                {collapsed && (
                    <button
                        onClick={() => setCollapsed(false)}
                        className="toggle-button"
                        aria-label="Expandir Sidebar"
                    >
                        <img
                            src={toggleLeft}
                            alt="Expandir"
                            className="toggle-icon"
                        />
                    </button>
                )}
            </div>
        </div>
    );
}

export default SidebarHeader;
