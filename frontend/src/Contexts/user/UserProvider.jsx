import { useState, useEffect } from "react";
import { UserContext } from "./UserContext";
import { userApi } from "../../utils/api";

const defaultUser = {
    id: null,
    name: "Usuario",
    fullName: "Usuario",
    initials: "US",
    email: "",
    code: "",
    role: "Estudiante",
    faculty: "",
    ciclo: "",
    cycle: "",
    registerDate: "",
    photo: null,
};

function mapSupabaseUserToApp(supabaseUser) {
    if (!supabaseUser) return defaultUser;
    
    const name = supabaseUser.nombre || supabaseUser.name || "Usuario";
    const initials = name
        .split(" ")
        .map((word) => word[0])
        .join("")
        .toUpperCase()
        .slice(0, 2);

    const formatDate = (dateStr) => {
        if (!dateStr) return "";
        const cleanDate = dateStr.split('+')[0].trim();
        const date = new Date(cleanDate);
        if (isNaN(date.getTime())) return dateStr;
        return date.toLocaleDateString("es-PE", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return {
        id: supabaseUser.id,
        name: name,
        fullName: name,
        initials: initials,
        email: supabaseUser.correo || "",
        code: supabaseUser.codigo || "",
        role: supabaseUser.rol || "Estudiante",
        faculty: supabaseUser.facultad || "",
        ciclo: supabaseUser.ciclo || "",
        cycle: supabaseUser.ciclo || "",
        registerDate: formatDate(supabaseUser.created_at),
        photo: supabaseUser.photo || null,
    };
}

export default function UserProvider({ children }) {
    const [user, setUser] = useState(() => {
        try {
            const saved = localStorage.getItem("user");
            if (saved) {
                const parsed = JSON.parse(saved);
                return mapSupabaseUserToApp(parsed);
            }
            return defaultUser;
        } catch {
            console.warn("User corrupto en localStorage, reiniciando...");
            localStorage.removeItem("user");
            return defaultUser;
        }
    });

    const [loading, setLoading] = useState(false);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem("token");
            if (token) {
                const profileData = await userApi.getProfile();
                const mappedUser = mapSupabaseUserToApp(profileData);
                setUser(mappedUser);
                localStorage.setItem("user", JSON.stringify(profileData));
            }
        } catch (error) {
            console.warn("No se pudo cargar el perfil:", error.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const handleStorageChange = () => {
            const saved = localStorage.getItem("user");
            if (saved) {
                const parsed = JSON.parse(saved);
                setUser(mapSupabaseUserToApp(parsed));
            }
        };
        
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const updateUser = async (newData) => {
        try {
            setLoading(true);
            const updatedFromApi = await userApi.updateProfile(newData);
            const mappedUser = mapSupabaseUserToApp(updatedFromApi);
            setUser(mappedUser);
            localStorage.setItem("user", JSON.stringify(updatedFromApi));
        } catch (error) {
            console.error("Error al actualizar perfil:", error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    };

    return (
        <UserContext.Provider value={{ user, updateUser, loading, refreshProfile: fetchProfile }}>
            {children}
        </UserContext.Provider>
    );
}
