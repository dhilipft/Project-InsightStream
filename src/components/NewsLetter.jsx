import React from 'react';
import '../styles/NewsLetter.css';

const NewsLetter = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <h2>Subscribe to Our Newsletter</h2>
                <p>Get the latest news and updates delivered straight to your inbox.</p>
                <form className="newsletter-form">
                    <input type="email" placeholder="Enter your email" required />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    );
};

export default NewsLetter;