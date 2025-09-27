import toggleLeft from "../assets/toggleLeft-Sidebar-icon.svg"

function Topbar({ collapsed, setCollapsed }) {
    return (
        <div className="topbar">

            {collapsed && (

            <button
                onClick={() => setCollapsed(false)}
                className="toggle-button"
                aria-label="Toggle Sidebar"
            >
                <img
                    src={toggleLeft}
                    alt="Toggle"
                    className={`toggle-icon ${collapsed ? "rotated" : ""}`}
                />
            </button>
            )}
        </div>
    );
}

export default Topbar;