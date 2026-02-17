import "./FiltersSidebar.css";
import { ReactComponent as PriceIcon } from "../../assets/icons/precio.svg";
import { ReactComponent as RatingIcon } from "../../assets/icons/favorito.svg";
import { ReactComponent as PaymentIcon } from "../../assets/icons/pagar_azul.svg";
import { ReactComponent as TimeIcon } from "../../assets/icons/hora.svg";

function FiltersSidebar() {
    const filters = [
        { id: "time", label: "Tiempo", icon: <TimeIcon /> },
        { id: "price", label: "Precio", icon: <PriceIcon /> },
        { id: "rating", label: "Valoración", icon: <RatingIcon /> },
        { id: "payment", label: "Pago", icon: <PaymentIcon /> },
    ];

    return (
        <div className="filters-card">

            <h3 className="filters-title">
                Filtros por categoría
            </h3>

            <div className="filters-list">

                <label className="filter-item">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>

                    <span className="filter-icon">
                        <TimeIcon />
                    </span>

                    <span className="filter-text">Tiempo</span>
                </label>

                <div className="filter-divider"></div>

                <label className="filter-item">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>

                    <span className="filter-icon">
                        <PriceIcon />
                    </span>

                    <span className="filter-text">Precio</span>
                </label>

                <div className="filter-divider"></div>

                <label className="filter-item">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>

                    <span className="filter-icon">
                        <RatingIcon />
                    </span>

                    <span className="filter-text">Valoración</span>
                </label>

                <div className="filter-divider"></div>

                <label className="filter-item">
                    <input type="checkbox" />
                    <span className="custom-checkbox"></span>

                    <span className="filter-icon">
                        <PaymentIcon />
                    </span>

                    <span className="filter-text">Pago</span>
                </label>

            </div>

        </div>

    );
}

export default FiltersSidebar;
