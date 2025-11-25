import React from 'react';
import '../styles/styles.css';
import NavbarButton from './navbarBtn';
import IMG from '../assets/logo-data-riders.png';
//import IMG from '../assets/lightLogo.png';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <a 
                href="https://datariders.io/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="navbar-logo-link"
            >
                <img
                    src={IMG}
                    alt="Logotipo de Data Riders"
                    className="navbar-logo" 
                />
            </a>
            <div className="navbar-links-container">
                <NavbarButton 
                    text="SITIO OFICIAL" 
                    url="https://datariders.io/" 
                />
            </div>
            
        </div>
    );
};

export default Navbar;