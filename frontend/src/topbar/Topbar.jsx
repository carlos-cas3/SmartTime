import "./Topbar.css";
import TopbarMenu from "./TopbarMenu";
import Clock from "./Clock";

function Topbar() {
    return (
        <div className="topbar">
            {/* Reloj a la izquierda */}
            <Clock />

            {/* Menú a la derecha */}
            <TopbarMenu />
        </div>
    );
}

export default Topbar;
