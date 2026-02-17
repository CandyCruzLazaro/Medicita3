import "./SuccessModal.css";

function SuccessModal({ onContinue }) {
    return (
        <div className="success-overlay">
            <div className="success-modal">
                <h2 className="success-title">¡Felicidades!</h2>

                <h3 className="success-subtitle">
                    Registro de cuenta exitoso
                </h3>

                <p className="success-text">
                    Ahora puedes reservar tu cita
                </p>

                <button className="success-button" onClick={onContinue}>
                    Continuar
                </button>
            </div>
        </div>
    );
}

export default SuccessModal; 
