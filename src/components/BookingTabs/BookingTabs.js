import { useState } from "react";
import "./BookingTabs.css";
import examIcon from "../../assets/icons/Examen.svg";
import specialistIcon from "../../assets/icons/Especialista.svg";


function BookingTabs() {

    const [active, setActive] = useState("specialist");

    return (
        <div className="booking-wrapper">

            <div className="booking-container">

                {/* TAB EXAMEN */}
                <button
                    className={`booking-btn ${active === "exam" ? "active" : ""}`}
                    onClick={() => setActive("exam")}
                >
                    <img src={examIcon} alt="Examen" className="booking-icon" />

                    <span className="booking-label">Reservas de Examen</span>
                </button>

                {/* DIVIDER */}
                <div className="booking-divider" />

                {/* TAB ESPECIALISTA */}
                <button
                    className={`booking-btn ${active === "specialist" ? "active" : ""}`}
                    onClick={() => setActive("specialist")}
                >
                    <img src={specialistIcon} alt="Especialista" className="booking-icon" />
                    <span className="booking-label">Reservas de Especialista</span>
                </button>

            </div>

            {/* INDICADOR AZUL */}
            <div
                className={`booking-indicator ${active}`}
            />

        </div>
    );
}

export default BookingTabs;
