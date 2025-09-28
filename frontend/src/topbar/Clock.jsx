import { useEffect, useState } from "react";

function Clock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeString = time.toLocaleTimeString("es-PE", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    });

    const dateString = time.toLocaleDateString("es-PE", {
        weekday: "long",
        month: "long",
        day: "numeric",
    });

    return (
        <div className="clock">
            <div className="time">{timeString}</div>

            <div className="date">{dateString}</div>
        </div>
    );
}

export default Clock;
