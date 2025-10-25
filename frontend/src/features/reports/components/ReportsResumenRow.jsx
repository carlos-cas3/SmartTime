import InfoCardSummary from "../../../components/UI/InfoCard/InfoCardSummary";
import { FaBold , FaAddressBook } from "react-icons/fa";

export default function ReportsResumenRow() {
    return (
        <>
            <InfoCardSummary
                icon={<FaBold />}
                value="25"
                titleBesideIcon={"Total de Actividades"}
            />
            <InfoCardSummary
                icon={<FaAddressBook />}
                value="10"
                titleBesideIcon={"Completadas"}
            />
            <InfoCardSummary
                icon={<FaBold />}
                value="13"
                titleBesideIcon={"Pendientes"}
            />
            <InfoCardSummary
                icon={<FaAddressBook />}
                value="2"
                titleBesideIcon={"No completadas"}
            />
            <InfoCardSummary
                icon={<FaBold />}
                value="50%"
                titleBesideIcon={"% Cumplimiento"} //
            />
        </>
    );
}
