import "./CargaSemanal.css";

import CargaSemanalStatsRow from "./components/CargaSemanalStatsRow";
import CargaSemanalChartsRow from "./components/CargaSemanalChartsRow";
import CargaSemanalBarRow from "./components/CargaSemanalBarRow";

function CargaSemanal() {
    return (
        <div className="carga-semanal-rows">
            <div className="carga-semanal-row row-1">
                <CargaSemanalStatsRow />
            </div>

            <div className="carga-semanal-row row-2">
                <CargaSemanalChartsRow />
            </div>

            <div className="carga-semanal-row row-3">
                <CargaSemanalBarRow />
            </div>

            
        </div>
    );
}

export default CargaSemanal;
