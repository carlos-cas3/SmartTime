import { useState } from "react";
import { UserContext } from "./UserContext";

const defaultUser = {
    name: "Usuario prueba",
    initials: "UP",
    email: "prueba@unmsm.edu.pe",
    code: "00000000",
    role: "Estudiante",
    faculty: "Ingeniería de Sistemas e Informática",
    cycle: "10mo Ciclo",
    photo: null,
};

export default function UserProvider({ children }) {
    // Inicializar correctamente con localStorage
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("user");
        return saved ? JSON.parse(saved) : defaultUser;
    });

    const updateUser = (newData) => {

        const updatedName = newData.name || user.name;

        const initials = updatedName
            .split(" ")
            .map((word) => word[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

        const updated = {
            ...user,
            ...newData,
            initials,
        };


        setUser(updated);
        localStorage.setItem("user", JSON.stringify(updated));
    };

    return (
        <UserContext.Provider value={{ user, updateUser }}>
            {children}
        </UserContext.Provider>
    );
}
