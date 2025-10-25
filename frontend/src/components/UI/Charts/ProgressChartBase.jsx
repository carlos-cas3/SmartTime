import "./ProgressChartBase.css";

export default function ProgressChartBase({ label, value }) {
    return (
        <div className="progress-container">
            <div className="progress-header">
                <span>{label}</span>
                <span>{value}%</span>
            </div>
            <div className="progress-bar">
                <div
                    className="progress-fill"
                    style={{ width: `${value}%` }}
                ></div>
            </div>
        </div>
    );
}
