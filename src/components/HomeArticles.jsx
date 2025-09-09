import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/HomeArticles.css';

const HomeArticles = () => {
    const { news, loading } = useContext(GeneralContext);

    // Display articles after the top 5, which are already shown
    const homeArticles = news.slice(5);

    return (
        <div className="home-articles-section">
            <h2>Latest News</h2>
             {loading ? <p>Loading...</p> : (
                <div className="home-articles-grid">
                    {homeArticles.map((article, index) => (
                       <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-card-home" key={index}>
                            <img src={article.urlToImage} alt={article.title} />
                            <h3>{article.title}</h3>
                            <p>{article.description}</p>
                            <span>{article.source.name}</span>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default HomeArticles;