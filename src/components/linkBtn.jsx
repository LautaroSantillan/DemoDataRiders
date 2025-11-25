import React from 'react';
import '../styles/styles.css';
// Si usaras React Icons, podrías importar algo como:
// import { IoArrowForward } from 'react-icons/io5'; 

const LinkButton = ({ text, url }) => {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer" 
            className="link-btn-anchor"
        >
            <button className="link-btn-button">
                <span className="link-btn-icon">
                    →
                </span>
                <span className="link-btn-text">
                    {text}
                </span>
            </button>
        </a>
    );
};

export default LinkButton;