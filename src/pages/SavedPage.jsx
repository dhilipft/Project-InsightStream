import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/CategoryPage.css'; // We can reuse this stylesheet

const SavedPage = () => {
    // 1. Get the removeSavedArticle function from the context
    const { savedArticles, removeSavedArticle } = useContext(GeneralContext);

    return (
        <div className="category-page page-container-animated">
            <h2>Saved Articles</h2>
            {savedArticles.length > 0 ? (
                <div className="article-grid">
                    {savedArticles.map((article, index) => (
                        // 2. The card is now a div so we can add the button
                        <div className="article-card" key={index}>
                            <a href={article.url} target="_blank" rel="noopener noreferrer" className="article-card-link">
                                <img src={article.urlToImage} alt={article.title} />
                                <h3>{article.title}</h3>
                                <p>{article.source.name}</p>
                            </a>
                            {/* 3. Add the "Unsave" button */}
                            <button 
                                onClick={() => removeSavedArticle(article)} 
                                className="save-button unsave-button"
                            >
                                Unsave
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p style={{ textAlign: 'center', fontSize: '1.2rem' }}>You haven't saved any articles yet.</p>
            )}
        </div>
    );
};

export default SavedPage;