import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
    const { categoryName } = useParams();
    // 1. Get the new save functions and saved articles list from the context
    const { news, setCategory, loading, savedArticles, addSavedArticle, removeSavedArticle } = useContext(GeneralContext);

    useEffect(() => {
        setCategory(categoryName);
    }, [categoryName, setCategory]);

    return (
        <div key={categoryName} className="category-page page-container-animated">
            <h2>{categoryName.charAt(0).toUpperCase() + categoryName.slice(1)} News</h2>
            {loading ? <p>Loading articles...</p> : (
                <div className="article-grid">
                    {news.map((article, index) => {
                        // 2. For each article, check if it's already in our saved list
                        const isSaved = savedArticles.some(saved => saved.url === article.url);

                        // 3. Create a click handler for our new button
                        const handleSaveClick = (e) => {
                            e.preventDefault(); // This stops the browser from following the link
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
                    })}
                </div>
            )}
        </div>
    );
};

export default CategoryPage;