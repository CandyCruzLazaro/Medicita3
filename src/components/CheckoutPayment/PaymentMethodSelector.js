import "./PaymentMethodSelector.css";
import { useState } from "react";
import VisaIcon from "../../assets/icons/image 23.svg";
import MasterIcon from "../../assets/icons/image 25.svg";
import Master2Icon from "../../assets/icons/image 24.svg";
import PaypalIcon from "../../assets/icons/image 26.svg";
import CriptoIcon from "../../assets/icons/image 27.svg";
import CardIcon from "../../assets/icons/tarjeta.svg";

import { useNavigate } from "react-router-dom";

export default function PaymentMethodSelector() {

    const [method, setMethod] = useState("card");
    const navigate = useNavigate();

    return (



        <div className="payment-method-box">

            <h3 className="payment-title">
                Forma de pago
            </h3>
            <div className="payment-options">

                <label className="payment-option">

                    <input
                        type="radio"
                        name="payment"
                        checked={method === "card"}
                        onChange={() => setMethod("card")}
                    />
                    <div>

                        <span>Tarjeta de Crédito/Débito</span>

                        <div className="payment-icons">
                            <img src={VisaIcon} alt="visa" />
                            <img src={MasterIcon} alt="mastercard" />
                            <img src={Master2Icon} alt="maestracard" />
                        </div>
                    </div>

                </label>

                <label className="payment-option">

                    <input
                        type="radio"
                        name="payment"
                        checked={method === "transfer"}
                        onChange={() => setMethod("transfer")}
                    />

                    <span>Transferencia bancaria</span>

                </label>

                <label className="payment-option">

                    <input
                        type="radio"
                        name="payment"
                        checked={method === "paypal"}
                        onChange={() => setMethod("paypal")}
                    />

                    <span>Paypal</span>

                    <div className="payment-icons">
                        <img src={PaypalIcon} alt="visa" />
                    </div>

                </label>

                <label className="payment-option">

                    <input
                        type="radio"
                        name="payment"
                        checked={method === "crypto"}
                        onChange={() => setMethod("crypto")}
                    />

                    <span>Criptomonedas</span>
                    <div className="payment-icons">
                        <img src={CriptoIcon} alt="Cripto" />
                    </div>
                </label>

            </div>

            <button
                className="payment-continue-btn"
                onClick={() => navigate("/payment")}
            >
                Proceder a pagar
            </button>


        </div>
    );
}
