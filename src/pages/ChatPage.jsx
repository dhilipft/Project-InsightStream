import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import '../styles/ChatPage.css';

const ChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSend = async () => {
        if (input.trim() === '' || isLoading) return;

        const userMessage = { role: 'user', text: input };
        setMessages(prev => [...prev, userMessage]);
        setInput('');
        setIsLoading(true);

        // --- Start of Echo Bot Logic ---
        // Simulate a delay as if the "AI" is typing
        setTimeout(() => {
            const aiMessage = { role: 'ai', text: `You said: "${input}"` };
            setMessages(prev => [...prev, aiMessage]);
            setIsLoading(false);
        }, 1000); // 1-second delay
        // --- End of Echo Bot Logic ---
    };

    return (
        <div className="chat-page-container">
            <div className="chat-page-header">
                <Link to="/" className="back-button"><FontAwesomeIcon icon={faArrowLeft} /></Link>
                <h2>Support Chat</h2>
            </div>
            <div className="chat-page-body">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                        <p>{msg.text}</p>
                    </div>
                ))}
                 {isLoading && (
                    <div className="chat-message ai typing-indicator">
                       <span></span>
                       <span></span>
                       <span></span>
                    </div>
                )}
            </div>
            <div className="chat-page-footer">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    placeholder="Ask a question..."
                />
                <button onClick={handleSend} disabled={isLoading}>
                    <FontAwesomeIcon icon={faPaperPlane} />
                </button>
            </div>
        </div>
    );
};

export default ChatPage;