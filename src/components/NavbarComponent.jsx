import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import logo from '../assets/logo.png';
import ThemeToggle from './ThemeToggle';
import '../styles/Navbar.css';

const NavbarComponent = () => {
    // 1. Get currentUser and logoutUser from the context
    const { currentUser, logoutUser, setCategory, setSearchTerm } = useContext(GeneralContext);
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleCategoryClick = (category) => {
        setSearchTerm('');
        setCategory(category);
    };
    
    const handleSearch = (e) => {
        e.preventDefault();
        if (query.trim()) {
            setSearchTerm(query.trim());
            navigate('/search');
            setQuery('');
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={() => handleCategoryClick('general')}>
                    <img src={logo} alt="InsightStream Logo" className="nav-logo-img"/>
                    InsightStream
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/category/business" className="nav-links" onClick={() => handleCategoryClick('business')}>Business</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/technology" className="nav-links" onClick={() => handleCategoryClick('technology')}>Technology</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/category/entertainment" className="nav-links" onClick={() => handleCategoryClick('entertainment')}>Entertainment</Link>
                    </li>
                     <li className="nav-item">
                        <Link to="/category/sports" className="nav-links" onClick={() => handleCategoryClick('sports')}>Sports</Link>
                    </li>
                    {/* 2. Conditionally show the "Saved" link only if a user is logged in */}
                    {currentUser && (
                        <li className="nav-item">
                            <Link to="/saved" className="nav-links">Saved</Link>
                        </li>
                    )}
                </ul>
                <div className="nav-right">
                    <form className="search-form" onSubmit={handleSearch}>
                        <input type="text" placeholder="Search..." value={query} onChange={(e) => setQuery(e.target.value)} />
                        <button type="submit">Go</button>
                    </form>

                    {/* 3. Conditionally show Login/Signup OR the user's name and a Logout button */}
                    {currentUser ? (
                        <div className="nav-user-info">
                            <span>Welcome, {currentUser}</span>
                            <button onClick={logoutUser} className="auth-button-nav">Logout</button>
                        </div>
                    ) : (
                        <div className="nav-auth-links">
                            <Link to="/login" className="nav-links">Login</Link>
                            <Link to="/signup" className="auth-button-nav">Sign Up</Link>
                        </div>
                    )}

                    <ThemeToggle />
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;