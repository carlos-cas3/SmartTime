import "./Dashboard.css";

import DashboardTaskRow from "./components/DashboardTaskRow";
import DashboardStatsRow from "./components/DashboardStatsRow";
import DashboardChartsRow from "./components/DashboardChartsRow";

export default function Dashboard() {
    return (
        <div className="dashboard-rows">
            {/* FILA 1 → 3 columnas */}
            <div className="dashboard-row row-3">
                <DashboardStatsRow />
            </div>

            {/* FILA 2 → 2 columnas */}
            <div className="dashboard-row row-2">
                <DashboardChartsRow />
            </div>

            {/* FILA 3 → 1 columna */}
            <div className="dashboard-row row-1">
                <DashboardTaskRow />
            </div>
        </div>
    );
}
