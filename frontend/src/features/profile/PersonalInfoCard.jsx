import { useContext } from "react";
import InfoCardBase from "../../components/UI/InfoCard/InfoCardBase";
import {
    MdEmail,
    MdPhone,
    MdLocationOn,
    MdCalendarMonth,
    MdMap,
} from "react-icons/md";
import "./PersonalInfoCard.css";
import { UserContext } from "../../Contexts/user/UserContext";

export default function PersonalInfoCard() {
    const { user } = useContext(UserContext);

    return (
        <InfoCardBase
            title="Información Personal"
            subtitle="Datos de contacto y ubicación"
        >
            <div className="pi-grid">
                {/* Email */}
                <div className="pi-item">
                    <div className="pi-icon email">
                        <MdEmail />
                    </div>
                    <div>
                        <span className="pi-label">Correo electrónico</span>
                        <p className="pi-value">
                            {user.email || "No definido"}
                        </p>
                    </div>
                </div>

                {/* Teléfono */}
                <div className="pi-item">
                    <div className="pi-icon phone">
                        <MdPhone />
                    </div>
                    <div>
                        <span className="pi-label">Teléfono</span>
                        <p className="pi-value">
                            {user.phone || "No definido"}
                        </p>
                    </div>
                </div>

                {/* Ciudad */}
                <div className="pi-item">
                    <div className="pi-icon city">
                        <MdLocationOn />
                    </div>
                    <div>
                        <span className="pi-label">Ciudad</span>
                        <p className="pi-value">
                            {user.city
                                ? `${user.city}, ${user.country}`
                                : "No definida"}
                        </p>
                    </div>
                </div>

                {/* Fecha registro */}
                <div className="pi-item">
                    <div className="pi-icon date">
                        <MdCalendarMonth />
                    </div>
                    <div>
                        <span className="pi-label">Fecha de registro</span>
                        <p className="pi-value">
                            {user.registerDate || "No definida"}
                        </p>
                    </div>
                </div>
            </div>

            <hr className="pi-divider" />

            {/* Dirección */}
            <div className="pi-address">
                <div className="pi-icon address">
                    <MdMap />
                </div>

                <div>
                    <span className="pi-label">Dirección completa</span>
                    <p className="pi-value">
                        {user.address || "No definida"}
                    </p>
                </div>
            </div>
        </InfoCardBase>
    );
}
