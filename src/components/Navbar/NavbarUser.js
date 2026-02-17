


import "./Navbar.css";

function NavbarUser() {

    const privateMenu = [
        { id: 1, label: "Calendario" },
        { id: 2, label: "Mi cuenta" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <img src="/logo-medcita.svg" alt="MediCita" />
                </div>

                <div className="navbar-menu">

                    {privateMenu.map(item => (
                        <button key={item.id} className="nav-link">
                            {item.label}
                        </button>
                    ))}

                    <button className="nav-icon-btn">?</button>

                </div>

            </div>
        </nav>
    );
}

export default NavbarUser;
