import React from 'react';
import Hero from '../components/Hero';
import TopStories from '../components/TopStories';
import HomeArticles from '../components/HomeArticles';
import NewsLetter from '../components/NewsLetter';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <Hero />
            <TopStories />
            <HomeArticles />
            <NewsLetter />
        </div>
    );
};

export default Home;