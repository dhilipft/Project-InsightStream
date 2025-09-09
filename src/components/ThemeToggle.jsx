import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useContext(GeneralContext);

    return (
        <div className="theme-toggle-container">
            <label className="switch">
                <input 
                    type="checkbox" 
                    onChange={toggleTheme} 
                    checked={theme === 'dark'}
                />
                <span className="slider round"></span>
            </label>
        </div>
    );
};

export default ThemeToggle;