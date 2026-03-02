import { useContext } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import {
    MdEmail,
    MdPerson,
    MdSchool,
    MdCalendarMonth,
} from "react-icons/md";
import "./PersonalInfoCard.css";
import { UserContext } from "../../Contexts/user/UserContext";

export default function PersonalInfoCard() {
    const { user } = useContext(UserContext);

    return (
        <InfoCardBase
            title="Información Personal"
            subtitle="Datos del estudiante"
        >
            <div className="pi-grid">
                {/* Nombre */}
                <div className="pi-item">
                    <div className="pi-icon name">
                        <MdPerson />
                    </div>
                    <div>
                        <span className="pi-label">Nombre</span>
                        <p className="pi-value">
                            {user.name || "No disponible"}
                        </p>
                    </div>
                </div>

                {/* Código */}
                <div className="pi-item">
                    <div className="pi-icon code">
                        <MdPerson />
                    </div>
                    <div>
                        <span className="pi-label">Código</span>
                        <p className="pi-value">
                            {user.code || "No disponible"}
                        </p>
                    </div>
                </div>

                {/* Email */}
                <div className="pi-item">
                    <div className="pi-icon email">
                        <MdEmail />
                    </div>
                    <div>
                        <span className="pi-label">Correo electrónico</span>
                        <p className="pi-value">
                            {user.email || "No disponible"}
                        </p>
                    </div>
                </div>

                {/* Facultad */}
                <div className="pi-item">
                    <div className="pi-icon faculty">
                        <MdSchool />
                    </div>
                    <div>
                        <span className="pi-label">Facultad</span>
                        <p className="pi-value">
                            {user.faculty || "No disponible"}
                        </p>
                    </div>
                </div>

                {/* Rol */}
                <div className="pi-item">
                    <div className="pi-icon role">
                        <MdPerson />
                    </div>
                    <div>
                        <span className="pi-label">Rol</span>
                        <p className="pi-value">
                            {user.role || "No disponible"}
                        </p>
                    </div>
                </div>

                {/* Fecha de registro */}
                <div className="pi-item">
                    <div className="pi-icon date">
                        <MdCalendarMonth />
                    </div>
                    <div>
                        <span className="pi-label">Fecha de registro</span>
                        <p className="pi-value">
                            {user.registerDate || "No disponible"}
                        </p>
                    </div>
                </div>
            </div>
        </InfoCardBase>
    );
}
