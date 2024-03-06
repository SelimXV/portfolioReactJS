// MobileNav.jsx
import React, { useState } from "react";
import "./MobileNav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/fontawesome-free-regular";

const MobileNav = ({ isOpen, toggleMenu, toggleDarkMode, isDarkMode }) => {
    const [isDark, setIsDark] = useState(false);

    const handleDarkMode = () => {
        setIsDark(!isDark);
        toggleDarkMode(!isDark);
    };

    return (
        <div
            className={`mobile-menu ${isOpen ? "active" : ""} ${isDarkMode ? 'dark' : ''}`}
            onClick={toggleMenu}
        >
            <div className={"mobile-menu-container"}>
                <img className="logo" src="/images/logo0.png" height={100} alt="" />
                <ul>
                    <li>
                        <a className={"menu-item"}>Accueil</a>
                    </li>
                    <li>
                        <a className="menu-item">A Propos</a>
                    </li>
                    <li>
                        <a className="menu-item">Projets</a>
                    </li>
                    <li>
                        <a className="menu-item">Veille Technologique</a>
                    </li>
                    <button className={"contact-btn"} onClick={() => {}}>
                        Contactez-moi
                    </button>
                    <button className="mode-btn" onClick={handleDarkMode}>
                        <FontAwesomeIcon
                            icon={isDark ? faSun : faMoon}
                            className="mode-icon"
                        />
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default MobileNav;
