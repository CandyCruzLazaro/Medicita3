import "./CardPaymentForm.css";
import VisaIcon from "../../assets/icons/image 23.svg";
import MasterIcon from "../../assets/icons/image 25.svg";
import Master2Icon from "../../assets/icons/image 24.svg";
import CardIcon from "../../assets/icons/tarjeta.svg";

import { useState } from "react";
import SuccessModal from "../SuccessModal/SuccessModal";
import { useNavigate } from "react-router-dom";


export default function CardPaymentForm() {
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();


    return (
        <div className="card-payment">

            <h3 className="card-title">
                Pago con tarjeta de Crédito/Débito
            </h3>

            <div className="card-brands">
                <img src={VisaIcon} alt="Visa" />
                <img src={MasterIcon} alt="Mastercard" />
                <img src={Master2Icon} alt="Maestro" />
            </div>

            <div className="card-field">
                <label>NÚMERO DE TARJETA</label>
                <div className="input-icon">
                    <input
                        type="text"
                        placeholder="0000 0000 0000 0000"
                        maxLength="19"
                    />
                    <span className="card-icon">
                        <img src={CardIcon} alt="Card" />
                    </span>
                </div>
            </div>

            <div className="card-row">

                <div className="card-field">
                    <label>FECHA DE VENCIMIENTO</label>
                    <input type="text" placeholder="00/00" maxLength="5" />
                </div>

                <div className="card-field">
                    <label>CVV</label>
                    <div className="input-icon">
                        <input type="password" placeholder="000" maxLength="4" />
                        <span className="info-icon">ⓘ</span>
                    </div>
                </div>

            </div>

            <button
                className="pay-btn"
                onClick={() => setShowModal(true)}
            >
                Pagar
            </button>



            {showModal && (
                <SuccessModal
                    onContinue={() => navigate("/")}
                />
            )}

        </div>
    );
}
