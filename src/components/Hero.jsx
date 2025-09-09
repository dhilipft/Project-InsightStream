import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/Hero.css';

const Hero = () => {
    const { topStories, loading } = useContext(GeneralContext);

    if (loading || topStories.length === 0) {
        return <div className="hero-section loading">Loading Hero...</div>;
    }

    const heroArticle = topStories[0];

    return (
        <div className="hero-section" style={{ backgroundImage: `url(${heroArticle.urlToImage})` }}>
            <div className="hero-content">
                <h1><a href={heroArticle.url} target="_blank" rel="noopener noreferrer">{heroArticle.title}</a></h1>
                <p>{heroArticle.description}</p>
            </div>
        </div>
    );
};

export default Hero;