import "./LocationCard.css";
import UbicIcon from "../../assets/icons/ubicacion_azul.svg";
import OpinIcon from "../../assets/icons/opiniones.svg";
import ContactIcon from "../../assets/icons/contacto.svg";
import ServicesIcon from "../../assets/icons/Servicios_azul.svg";

function LocationCard() {
    return (
        <div className="location-card">

            {/* Tabs */}
            <div className="location-tabs">
                <div className="tab-item active">
                    <img
                        src={UbicIcon}
                        alt="Dirección"
                        className="tab-icon"
                    />

                    <span className="tab-text">
                        Dirección
                    </span>
                </div>

                <div className="tab-item">
                    <img
                        src={OpinIcon}
                        alt="Opiniones"
                        className="tab-icon"
                    />

                    <span className="tab-text">
                        Opiniones
                    </span>
                </div>

                <div className="tab-item">
                    <img
                        src={ContactIcon}
                        alt="Contacto"
                        className="tab-icon"
                    />

                    <span className="tab-text">
                        Contacto
                    </span>
                </div>

                <div className="tab-item">
                    <img
                        src={ServicesIcon}
                        alt="Servicios"
                        className="tab-icon"
                    />

                    <span className="tab-text">
                        Servicios
                    </span>
                </div>


            </div>

            {/* Address */}
            <div className="clinic-address-block">
                <p className="clinic-address-text">
                    Diagonal 75B #2A-80. Torre Médica Las Américas
                </p>

                <a
                    className="clinic-map-link"
                    href="https://www.google.com/maps?q=Diagonal+75B+2A-80+Torre+Medica+Las+Americas"
                    target="_blank"
                    rel="noreferrer"
                >
                    Ver en el mapa
                </a>
            </div>


            {/* Map */}
            <div className="location-map">
                <iframe
                    title="clinic-map"
                    src="https://www.google.com/maps?q=Diagonal+75B+2A-80+Torre+Medica+Las+Americas&output=embed"
                    loading="lazy"
                />
            </div>

        </div>
    );
}

export default LocationCard;
