import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/AuthForm.css'; // We can reuse the same stylesheet

const LoginPage = () => {
    const [identifier, setIdentifier] = useState(''); // Can be username or email
    const [password, setPassword] = useState('');
    const { loginUser } = useContext(GeneralContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = loginUser(identifier, password);
        if (success) {
            navigate('/'); // Redirect to homepage after successful login
        }
    };

    return (
        <div className="auth-container page-container-animated">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <div className="form-group">
                    <label htmlFor="identifier">Username or Email</label>
                    <input
                        type="text"
                        id="identifier"
                        value={identifier}
                        onChange={(e) => setIdentifier(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" className="auth-button">Log In</button>
                <p className="auth-switch">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default LoginPage;