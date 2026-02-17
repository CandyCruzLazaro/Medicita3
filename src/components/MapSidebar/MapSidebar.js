import "./MapSidebar.css";

function MapSidebar() {
    return (
        <aside className="map-sidebar">

            <button className="map-btn">
                📍 Buscar en el mapa
            </button>

            <div className="map-container">
                <iframe
                    title="map"
                    src="https://www.google.com/maps?q=Bosque+de+las+Lomas,+Ciudad+de+México,+CDMX&output=embed"
                    loading="lazy"
                />
            </div>

        </aside>
    );
}

export default MapSidebar;
