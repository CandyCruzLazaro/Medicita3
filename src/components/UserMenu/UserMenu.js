
import "./UserMenu.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import ProfileIcon from "../../assets/icons/Usuario.svg";
import ChatsIcon from "../../assets/icons/chats.svg";
import AccesibilidadIcon from "../../assets/icons/presencial.svg";
import CerrarIcon from "../../assets/icons/cancelar.svg";
import CitasIcon from "../../assets/icons/Servicios.svg";

import {
    FiClipboard,
    FiMessageSquare,
    FiUsers,
    FiX
} from "react-icons/fi";


function UserMenu({ onClose }) {
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                onClose();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [onClose]);

    return (
        <div ref={menuRef} className="user-menu">
            <img
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
                alt="Avatar"
                className="user-avatar"
            />

            <div className="menu-item menu-alert" onClick={onClose}>
                <img src={CitasIcon} alt="Citas" className="menu-icon" />
                Sin citas reservadas</div>

            <div className="menu-item" onClick={onClose}>
                <img src={ProfileIcon} alt="Perfil" className="menu-icon" />
                Perfil</div>

            <div className="menu-item" onClick={onClose}>
                <img src={ChatsIcon} alt="Chats" className="menu-icon" />
                Chats</div>

            <div className="menu-item" onClick={onClose}>
                <img src={AccesibilidadIcon} alt="Accesibilidad" className="menu-icon" />
                Accesibilidad</div>

            <div className="menu-item menu-logout" onClick={onClose}>
                <img src={CerrarIcon} alt="Cerrar" className="menu-icon" />
                Cerrar sesión</div>
        </div>
    );
}

export default UserMenu;