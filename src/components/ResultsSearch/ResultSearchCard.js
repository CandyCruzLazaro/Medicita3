import "./ResultsSearch.css";
import ClinicIcon from "../../assets/icons/clinica.svg";
import CityIcon from "../../assets/icons/ciudad.svg";
import UbicationIcon from "../../assets/icons/ubicacion.svg";
import HeartIcon from "../../assets/icons/me encanta.svg";
import InsigniaIcon from "../../assets/icons/Insignia.svg";

import { useNavigate } from "react-router-dom";

function ResultSearchCard({ image, title, price, buttonText, nextPath }) {

    const navigate = useNavigate();


    return (

        <div className="result-card">

            <div className="result-card-image">
                <img src={image} alt={title} />
                <button className="favorite-btn">
                    <img src={HeartIcon} alt="Favorito" />
                </button>

            </div>

            <div className="result-card-content">

                <div className="result-card-header">
                    <h3>{title}</h3>

                    <img
                        src={InsigniaIcon}
                        alt="Insignia verificada"
                        className="badge-icon"
                    />
                </div>


                <div className="result-card-info">

                    <div className="info-row">
                        <img src={ClinicIcon} alt="Clinica" />
                        <span>Clínica ambulatoria</span>
                    </div>

                    <div className="info-row">
                        <img src={CityIcon} alt="Ciudad" />
                        <span>Ciudad</span>
                    </div>

                    <div className="info-row">
                        <img src={UbicationIcon} alt="Dirección" />
                        <span>Dirección</span>
                    </div>

                </div>


                <div className="result-card-footer">
                    <div className="stars">⭐⭐⭐⭐⭐</div>

                    <div className="price-action">
                        <span className="price">${price} MN</span>
                        <button
                            className="btn-hours"
                            onClick={() => navigate(nextPath)}
                        >
                            {buttonText}
                        </button>



                    </div>
                </div>

            </div>

        </div>


    );
}

export default ResultSearchCard;
