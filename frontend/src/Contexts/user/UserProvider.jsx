import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";

export default function UserProvider({ children }) {
    const [user, setUser] = useState(null);

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
