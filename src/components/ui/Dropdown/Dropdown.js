import { useState, useRef, useEffect } from "react";
import "./Dropdown.css";
import { ReactComponent as ArrowIcon } from "../../../assets/icons/arrow_down.svg";



function Dropdown({ placeholder, options, value, onChange }) {

    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="dropdown-container" ref={ref}>

            <div
                className={`dropdown-control ${open ? "active" : ""}`}
                onClick={() => setOpen(!open)}
            >
                <span>
                    {value || placeholder}
                </span>

                <ArrowIcon className={`dropdown-arrow ${open ? "rotate" : ""}`} />

            </div>

            {open && (
                <div className="dropdown-menu">
                    {options.map((item) => (
                        <div
                            key={item.value}
                            className="dropdown-item"
                            onClick={() => {
                                onChange(item.value);
                                setOpen(false);
                            }}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Dropdown;
