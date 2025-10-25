import "./Reports.css";

import ReportsResumenRow from "./components/ReportsResumenRow";
import ReportsChartsRow from "./components/ReportsChartsRow";
import ReportsTableRow from "./components/ReportsTableRow";

export default function Reports() {
    return (
        <div className="reports-rows">
            <div className="reports-row row-1">
                <ReportsResumenRow />
            </div>
            <div className="reports-row row-2">
                <ReportsChartsRow />
            </div>

            <div className="reports-row row-3">
                <ReportsTableRow/>
            </div>
        </div>
    );
}
