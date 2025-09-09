import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentDots } from '@fortawesome/free-solid-svg-icons';
import '../styles/ChatBox.css';

const ChatBox = () => {
    return (
        // The container is now a Link to the new page
        <Link to="/chat" className="chat-toggle-button">
            <FontAwesomeIcon icon={faCommentDots} />
        </Link>
    );
};

export default ChatBox;