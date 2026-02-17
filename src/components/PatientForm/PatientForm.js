import "./PatientForm.css";
import { useNavigate } from "react-router-dom";


function PatientForm() {
    const navigate = useNavigate();


    return (
        <section className="patient-form">


            {/* GRID PRINCIPAL */}
            <div className="form-grid">

                {/* COLUMNA IZQUIERDA */}
                <div className="form-block">
                    <h3 className="form-title">Información personal del paciente*</h3>
                    <h4 className="form-subtitle">Datos del paciente</h4>

                    <input
                        type="text"
                        className="form-input"
                        placeholder="Nombre del paciente *"
                    />

                    <input
                        type="text"
                        className="form-input"
                        placeholder="Apellido del paciente *"
                    />

                    <h4 className="form-subtitle">
                        ¿ El paciente padece alguna enfermedad ?
                    </h4>

                    <input
                        type="text"
                        className="form-input"
                        placeholder="Ignora este campo si no padece ninguna enfermedad"
                    />

                    <h4 className="form-subtitle">
                        Comentario para la clínica (opcional)
                    </h4>

                    <textarea
                        className="form-input form-textarea"
                        placeholder="Agrega algún comentario si lo deseas"
                    />

                </div>

                {/* COLUMNA DERECHA */}
                <div className="form-block">
                    <h3 className="form-title">Información de contacto del paciente*</h3>
                    <input
                        type="tel"
                        className="form-input"
                        placeholder="Número celular del paciente *"
                    />

                    <input
                        type="email"
                        className="form-input"
                        placeholder="Email del paciente *"
                    />

                    <h3 className="requirements-title">
                        Requerimientos para el examen
                    </h3>

                    <ul className="requirements-list">
                        <li>1.- Ayunas</li>
                        <li>2.- Ayunas</li>
                        <li>3.- Ayunas</li>
                    </ul>

                    <label className="form-checkbox">
                        <input type="checkbox" />
                        Acepto términos y condiciones
                    </label>

                </div>

            </div>

            {/* BOTÓN */}
            <button
                className="form-button"
                onClick={() => navigate("/checkout")}
            >
                Continuar
            </button>


        </section>
    );
}

export default PatientForm;
