import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <p>&copy; {new Date().getFullYear()} InsightStream. All Rights Reserved.</p>
                <p>Powered by NewsAPI</p>
            </div>
        </footer>
    );
};

export default Footer;