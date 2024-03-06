// Navbar.jsx
import React from "react";
import "./Navbar.css";
import { faMoon, faSun } from '@fortawesome/fontawesome-free-regular';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MobileNav from "../MobileNav/MobileNav";
import { UilAlignJustify } from '@iconscout/react-unicons';

const Navbar = () => {
    const [openMenu, setOpenMenu] = React.useState(false);
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    const [isDarkMode, setIsDarkMode] = React.useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            document.body.classList.remove("dark");
        } else {
            document.body.classList.add("dark");
        }
    };

    return (
        <>
            <MobileNav
                isOpen={openMenu}
                toggleMenu={toggleMenu}
                toggleDarkMode={toggleDarkMode}
                isDarkMode={isDarkMode}
            />
            <nav className={`nav-wrapper ${isDarkMode ? 'dark' : ''}`}>
                <div className={"nav-content"}>
                    <div className={"nav-logo"}>
                        <p className={"nav-name"}>Sélim</p>
                        <span>.</span>
                    </div>
                    <div className={"nav-menu"}>
                        <ul className={"nav_menu_list"}>
                            <li>
                                <a href= {"#Accueil"} className={"menu-item"}>Accueil</a>
                            </li>
                            <li>
                                <a href={"#skills"} className="menu-item">Skills</a>
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
                            <button className="mode-btn" onClick={toggleDarkMode}>
                                <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} className="mode-icon" />
                            </button>
                        </ul>
                        <button className="nav-menu-btn" onClick={toggleMenu}>
                            <UilAlignJustify
                                size={30}
                                icon={() => openMenu ? "close" : "menu"}
                            />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
