import BarChartComparative from "../../../components/UI/Charts/BarChart/BarChartComparative";

export default function ActivityPendingXDayBarChart() {
    const data = [
        { name: "Lun", Completas: 5, Pendientes: 3 },
        { name: "Mar", Completas: 8, Pendientes: 2 },
        { name: "Mié", Completas: 6, Pendientes: 4 },
        { name: "Jue", Completas: 9, Pendientes: 3 },
        { name: "Vie", Completas: 7, Pendientes: 5 },
        { name: "Sáb", Completas: 3, Pendientes: 12 },
        { name: "Dom", Completas: 2, Pendientes: 3 },
    ];

    return (
        <BarChartComparative
            data={data}
            keys={["Completas", "Pendientes"]}
            colors={{
                Completas: "#50b920ff",
                Pendientes: "#e9c810ff",
            }}
        />
    );
}
