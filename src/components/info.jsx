import React from 'react';
import '../styles/styles.css';

const Info = ({ title, body }) => {
    return (
        <div className="info-container">
            <span className="info-title">
                {title}
            </span>
            <span className="info-body">
                {body}
            </span>
        </div>
    );
};

export default Info;