import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function StudyHoursChart() {
    const data = [
        { day: "Lun", hours: 4 },
        { day: "Mar", hours: 3 },
        { day: "Mie", hours: 6 },
        { day: "Jue", hours: 2 },
        { day: "Vie", hours: 5 },
        { day: "Sab", hours: 7 },
        { day: "Dom", hours: 4 },
    ];
    return (
        <div>
            <ResponsiveContainer width="100%" height={250}>
                <BarChart data={data}>
                    <XAxis dataKey="day" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="hours" fill="#8B0000" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
