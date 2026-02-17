import "./Navbar.css";

function NavbarSearch() {

    return (
        <nav className="navbar navbar-search">

            <div className="navbar-container">

                {/* LOGO */}
                <div className="navbar-logo">
                    <img src="/logo-medcita.svg" alt="MediCita" />
                </div>

                {/* SEARCH BAR */}
                <div className="navbar-search-bar">

                    {/* GRUPO 1 */}
                    <div className="search-group">
                        <select>
                            <option>Especialista</option>
                        </select>

                        <select>
                            <option>Ciudad</option>
                        </select>
                    </div>

                    {/* GRUPO 2 */}
                    <div className="search-group">
                        <input type="date" />

                        <select>
                            <option>Hora</option>
                        </select>
                    </div>



                </div>


                <button className="btn-search">
                    Buscar
                </button>

                <div className="account-box">
                    <span className="account-text">Mi cuenta</span>
                    <div className="help-icon">?</div>
                </div>

            </div>

        </nav>
    );
}

export default NavbarSearch;
