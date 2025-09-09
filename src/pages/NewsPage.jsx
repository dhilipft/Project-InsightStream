import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/NewsPage.css';

const NewsPage = () => {
    // 1. Get the new save functions and saved articles list from the context
    const { news, loading, savedArticles, addSavedArticle, removeSavedArticle } = useContext(GeneralContext);

    return (
        <div className="news-page page-container-animated">
            <h2>Search Results</h2>
            {loading ? <p>Loading articles...</p> : (
                <div className="article-grid">
                    {news.length > 0 ? news.map((article, index) => {
                        // 2. For each article, check if it's already in our saved list
                        const isSaved = savedArticles.some(saved => saved.url === article.url);

                        // 3. Create a click handler for our new button
                        const handleSaveClick = (e) => {
                            e.preventDefault();
                            if (isSaved) {
                                removeSavedArticle(article);
                            } else {
                                addSavedArticle(article);
                            }
                        };

                        return (
                            // 4. The card is now a div so we can add the button next to the link
                            <div className="article-card" key={index}>
                                <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-card-link">
                                    <img src={article.urlToImage} alt={article.title} />
                                    <h3>{article.title}</h3>
                                    <p>{article.source.name}</p>
                                </a>
                                {/* 5. Add the new save button */}
                                <button onClick={handleSaveClick} className="save-button">
                                    {isSaved ? 'Unsave' : 'Save'}
                                </button>
                            </div>
                        );
                    }) : <p>No articles found for your search.</p>}
                </div>
            )}
        </div>
    );
};

export default NewsPage;