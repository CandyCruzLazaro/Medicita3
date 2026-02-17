

import "./Navbar.css";

import { useNavigate } from "react-router-dom";

function NavbarGuest() {

    const navigate = useNavigate();

    const publicMenu = [
        { id: 1, label: "Quiénes somos" },
        { id: 2, label: "Idioma" },
        { id: 3, label: "Iniciar sesión", path: "/login" },
    ];

    return (
        <nav className="navbar">
            <div className="navbar-container">

                <div className="navbar-logo">
                    <img
                        src="/logo-medcita.svg"
                        alt="MediCita Logo"
                        className="navbar-logo-img"
                    />
                </div>

                <div className="navbar-menu">

                    <div className="mobile-menu-toggle">☰</div>

                    {publicMenu.map(item => (
                        <button
                            key={item.id}
                            className="nav-link"
                            onClick={() => item.path && navigate(item.path)}
                        >
                            {item.label}
                        </button>
                    ))}



                    <button className="nav-btn-outline">
                        Registro
                    </button>

                </div>

            </div>
        </nav>
    );
}

export default NavbarGuest;
