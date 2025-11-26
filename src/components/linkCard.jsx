import React from 'react';
import '../styles/styles.css';

const LinkCard = ({ url, image, title, description }) => {
    return (
        <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer" 
            className="link-card-anchor"
        >
            <div className="link-card-box">
                <div className="link-card-hstack">
                    <img 
                        src={image}
                        alt={title}
                        className="link-card-image"
                    />
                    <div className="link-card-vstack">
                        <p className="link-card-title">
                            {title}
                        </p>
                        <p className="link-card-description">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default LinkCard;