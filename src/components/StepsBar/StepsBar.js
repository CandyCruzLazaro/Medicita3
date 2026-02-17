import "./StepsBar.css";
import {
    FiSearch,
    FiCheckCircle,
    FiInfo,
    FiCreditCard,
    FiCheck
} from "react-icons/fi";
import { ReactComponent as BuscaIcon } from "../../assets/icons/Buscar.svg";
import { ReactComponent as EncuentraIcon } from "../../assets/icons/Component 12.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/informacion.svg";
import { ReactComponent as PagaIcon } from "../../assets/icons/pagar.svg";
import { ReactComponent as ExitIcon } from "../../assets/icons/éxito.svg";

function StepsBar({ currentStep = 1 }) {

    const steps = [
        { id: 1, label: "Busca", icon: <BuscaIcon className="step-icon" /> },
        { id: 2, label: "Encuentra", icon: <EncuentraIcon className="step-icon" /> },
        { id: 3, label: "Información", icon: <InfoIcon className="step-icon" /> },
        { id: 4, label: "Paga", icon: <PagaIcon className="step-icon" /> },
        { id: 5, label: "Reserva exitosa", icon: <ExitIcon className="step-icon" /> }
    ];

    return (
        <div className="steps-container">

            {steps.map((step, index) => (
                <div key={step.id} className="step-item">

                    <div
                        className={`step-circle ${step.id <= currentStep ? "active" : ""
                            }`}
                    >
                        {step.icon}
                    </div>

                    <span
                        className={`step-label ${step.id <= currentStep ? "active" : ""
                            }`}
                    >
                        {step.label}
                    </span>

                    {index !== steps.length - 1 && (
                        <div
                            className={`step-line ${step.id < currentStep ? "active" : ""
                                }`}
                        />
                    )}

                </div>
            ))}



        </div>
    );
}

export default StepsBar;
