import React from 'react';
import '../styles/styles.css'; // Importa los estilos CSS
import Info from '../components/info';

const Header = () => {
    return (
        <div className="header-container">
            <h1 className="header-title">
                ¡Expandi tu negocio con nosotros!
            </h1>
            <p className="header-description">
                Decisiones inteligentes que transforman tu negocio. Tomá decisiones basadas en datos y elevá tu empresa al siguiente nivel.
            </p>
            <div className="header-info-flex">
                <Info title="+15" body="años de experiencia" />
                <Info title="+..." body="cantidad de proyectos" />
                <Info title="+..." body="clientes satisfechos" />
            </div>
        </div>
    );
};

export default Header;