import "./ReservationDetails.css";

export default function ReservationDetails() {
    return (
        <div className="reservation-card">

            <h3 className="reservation-title">
                Detalles de la reservación
            </h3>

            <div className="reservation-body">

                <div className="reservation-row">
                    <span>N° de Reserva:</span>
                    <strong>2242685435132165454</strong>
                </div>

                <div className="reservation-row">
                    <span>Reserva:</span>
                    <strong>1 Examen</strong>
                </div>

                <div className="reservation-row">
                    <span>Descripción:</span>
                    <strong>Tomografía</strong>
                </div>

                <div className="reservation-row">
                    <span>A cargo:</span>
                    <strong>Policlínica metropolitana</strong>
                </div>

                <div className="reservation-row">
                    <span>Precio:</span>
                    <strong>500$</strong>
                </div>

                <div className="reservation-row">
                    <span>Fecha y hora:</span>
                    <strong>Fecha y hora</strong>
                </div>

                <div className="reservation-row">
                    <span>Dirección:</span>
                    <strong>Dirección</strong>
                </div>

                <div className="reservation-total">
                    <span>Total:</span>
                    <strong>500$</strong>
                </div>

            </div>
        </div>
    );
}
