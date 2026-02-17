
//import { useState } from "react";
import NavbarGuest from "./NavbarGuest";
import NavbarUser from "./NavbarUser";
import NavbarSearch from "./NavbarSearch";
import { useState, useEffect } from "react";


function Navbar({ variant = "home" }) {
    useEffect(() => {
        const logged = localStorage.getItem("isLogged");
        setIsLogged(logged === "true");
    }, []);

    //const [isLogged] = useState(false);
    const [isLogged, setIsLogged] = useState(false);



    // SEARCH PAGE
    if (variant === "search") {
        return <NavbarSearch />;
    }

    // HOME PAGE
    if (isLogged) {
        return <NavbarUser />;
    }

    return <NavbarGuest />;
}

export default Navbar;
