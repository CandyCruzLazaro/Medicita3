import "./SchedulePicker.css";
import SchedulePicker from "./SchedulePicker";


function SchedulePanel() {
    return (
        <div className="schedule-panel">

            {/* TEXTO SUPERIOR */}
            <div className="next-available">
                Próxima fecha disponible: <b>Mañana 24 Marzo</b> — Hora: <b>8:00 am</b>
            </div>

            {/* CAJA HORARIOS */}
            <div className="schedule-card">

                {/* Aquí luego insertamos el grid de horarios */}
                <div className="schedule-placeholder">
                    <SchedulePicker />
                </div>

            </div>

        </div>
    );
}

export default SchedulePanel;
