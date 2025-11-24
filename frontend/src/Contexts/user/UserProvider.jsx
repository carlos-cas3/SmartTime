import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

const defaultUser = {
    name: "Usuario prueba",
    initials: "UP",
    email: "prueba@unmsm.edu.pe",
    code: "00000000",
    role: "Estudiante",
    faculty: "Ingeniería de Sistemas e Informática",
    cycle: "10mo Ciclo",
};

export default function UserProvider({ children }) {
    const [user, setUser] = useState(defaultUser);

    useEffect(() => {
        const saved = localStorage.getItem("user");
        if (saved) setUser(JSON.parse(saved));
    }, []);

    const updateUser = (newData) => {
        const updated = { ...user, ...newData };
        setUser(updated);
        localStorage.setItem("user", JSON.stringify(updated));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}
