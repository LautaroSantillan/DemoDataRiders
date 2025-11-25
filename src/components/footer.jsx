import React from 'react';
import '../styles/styles.css';
import IMG from '../assets/logotipo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className="footer-container">
            <div className="footer-content">
                <img 
                    src={IMG}
                    alt="Logotipo" 
                    className="footer-logo"
                />
                <p className="footer-text">
                    © 2010-{currentYear} DATA RIDERS - Todos los Derechos Reservados.
                </p>
            </div>
        </div>
    );
};

export default Footer;