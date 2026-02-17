import "./FilterBar.css";
import ExamIcon from "../../assets/icons/Examen_blanco.svg";
import Searchcon from "../../assets/icons/Buscar_blanco.svg";

function FilterBar() {
    return (

        <div className="info-bar">
            <div className="info-bar-inner">

                {/* Lado izquierdo */}
                <div className="info-group">

                    <button className="filter-chip">
                        <img src={ExamIcon} alt="" />
                        <span>Tomografía</span>
                    </button>

                    <button className="filter-chip">
                        <img src={ExamIcon} alt="" />
                        <span>México</span>
                    </button>



                    {/* Botón derecho */}

                    <button className="date-btn">
                        Seleccionar fecha
                    </button>

                    <button className="search-btn">
                        <img src={Searchcon} alt="" />
                        Modificar búsqueda
                    </button>
                </div>

            </div>
        </div>
    );
}

export default FilterBar;
