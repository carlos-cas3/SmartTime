import splitInHorizontal from "../assets/split-in-horizontal.svg";

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
                    src={splitInHorizontal}
                    alt="Toggle"
                    className={`icon ${collapsed ? "rotated" : ""}`}
                />
            </button>
            )}
        </div>
    );
}

export default Topbar;