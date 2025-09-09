import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NotFoundPage.css';

const NotFoundPage = () => {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">404</h1>
            <p className="not-found-subtitle">Page Not Found</p>
            <p className="not-found-text">
                Sorry, the page you are looking for does not exist.
            </p>
            <Link to="/" className="not-found-button">
                Go Back Home
            </Link>
        </div>
    );
};

export default NotFoundPage;