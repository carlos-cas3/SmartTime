import { useContext } from "react";
import { UserContext } from "./UserContext";

export const useUser = () => useContext(UserContext);


/*   const user = {
        name: "Juan Pérez",
        initials: "JP",
        email: "juan.perez@unmsm.edu.pe",
        code: "20190234",
        role: "Estudiante",
        faculty: "Ingeniería de Sistemas e Informática",
        cycle: "10mo Ciclo",
    };
    */ 