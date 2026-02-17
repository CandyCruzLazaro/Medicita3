import { useState } from "react";
import "./Results.css";

function ResultsTabs({ onChange }) {

    const [active, setActive] = useState("opinions");

    const handleTab = (tab) => {
        setActive(tab);
        onChange(tab);
    };

    return (
        <div className="results-tabs">

            <button
                className={active === "opinions" ? "tab active" : "tab"}
                onClick={() => handleTab("opinions")}
            >
                Opiniones de usuarios
            </button>

            <button
                className={active === "top" ? "tab active" : "tab"}
                onClick={() => handleTab("top")}
            >
                Los mejores valorados por usuarios
            </button>

        </div>
    );
}

export default ResultsTabs;
