import "./SchedulePicker.css";

function SchedulePicker() {
    return (
        <div className="schedule-box">

            {/* Header */}
            <div className="schedule-header">
                Horario de la mañana y de la tarde
            </div>

            {/* Grid días */}
            <div className="schedule-grid">

                {/* Columna */}
                <div className="schedule-column">
                    <div className="day-title">Hoy</div>
                    <div className="day-date">23 Abr</div>

                    <span className="time disabled">8:00</span>
                    <span className="time disabled">8:30</span>
                    <span className="time disabled">9:00</span>
                </div>

                <div className="schedule-column">
                    <div className="day-title active">Mañana</div>
                    <div className="day-date">24 Abr</div>

                    <span className="time active">8:00</span>
                    <span className="time active">8:30</span>
                    <span className="time">9:00</span>
                    <span className="time active">11:00</span>
                </div>

                <div className="schedule-column">
                    <div className="day-title">Sábado</div>
                    <div className="day-date">25 Abr</div>

                    <span className="time active">8:00</span>
                    <span className="time active">8:30</span>
                    <span className="time active">9:30</span>
                    <span className="time active">11:00</span>
                </div>

                <div className="schedule-column">
                    <div className="day-title">Domingo</div>
                    <div className="day-date">26 Abr</div>

                    <span className="time disabled">8:00</span>
                    <span className="time disabled">8:30</span>
                    <span className="time disabled">9:00</span>
                </div>

            </div>

            {/* Flecha abajo */}
            <div className="schedule-arrow">
                ⌄
            </div>

        </div>
    );
}

export default SchedulePicker;
