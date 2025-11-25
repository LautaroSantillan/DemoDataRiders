import React from 'react';
import '../styles/styles.css';

const NavbarButton = ({ text, url }) => {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-link"
        >
            <button className="navbar-button">
                <span className="navbar-button-text">{text}</span>
            </button>
        </a>
    );
};

export default NavbarButton;