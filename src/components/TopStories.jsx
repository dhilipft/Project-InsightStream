import React, { useContext } from 'react';
import { GeneralContext } from '../context/GeneralContext';
import '../styles/TopStories.css';

const TopStories = () => {
    const { topStories, loading } = useContext(GeneralContext);

    // We skip the first story as it's in the Hero component
    const otherTopStories = topStories.slice(1, 5);

    return (
        <div className="top-stories-section">
            <h2>Top Stories</h2>
            {loading ? <p>Loading...</p> : (
                <div className="top-stories-grid">
                    {otherTopStories.map((story, index) => (
                        <a href={story.url} target="_blank" rel="noopener noreferrer" className="story-card" key={index}>
                            <img src={story.urlToImage} alt={story.title} />
                            <div className="story-content">
                                <h3>{story.title}</h3>
                                <p>{story.source.name}</p>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TopStories;