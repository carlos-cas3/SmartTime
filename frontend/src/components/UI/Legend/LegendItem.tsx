// components/UI/Legend/LegendItem.tsx
interface LegendItemProps {
    color: string;
    label: string;
    value: string | number;
}

export default function LegendItem({ color, label, value }: LegendItemProps) {
    return (
        <div className="legend-item">
            <span className="legend-dot" style={{ backgroundColor: color }} />
            <div>
                <p className="legend-label">{label}</p>
                <p className="legend-value">{value} actividades</p>
            </div>
        </div>
    );
}
