import React, { createContext, useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

export const GeneralContext = createContext();

const GeneralContextProvider = ({ children }) => {
    // --- Existing States ---
    const [news, setNews] = useState([]);
    const [topStories, setTopStories] = useState([]);
    const [category, setCategory] = useState('general');
    const [searchTerm, setSearchTerm] = useState('');
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState('light');

    // --- New Authentication and User States ---
    const [users, setUsers] = useState({}); // Stores all registered users, e.g., { "username": { email: "a@b.com" } }
    const [currentUser, setCurrentUser] = useState(null); // Tracks the current logged-in user's username
    const [allSavedArticles, setAllSavedArticles] = useState({});

    // Load all data from Local Storage on app start
    useEffect(() => {
        const allUsers = JSON.parse(localStorage.getItem('newsAppUsers')) || {};
        const allSaved = JSON.parse(localStorage.getItem('allUsersSavedArticles')) || {};
        setUsers(allUsers);
        setAllSavedArticles(allSaved);
    }, []);

    // --- New Authentication Functions ---
    const signupUser = (username, email) => {
        if (users[username]) {
            toast.error("Username already exists.");
            return false;
        }
        const newUsers = { ...users, [username]: { email } };
        setUsers(newUsers);
        localStorage.setItem('newsAppUsers', JSON.stringify(newUsers));
        toast.success("Registration successful! Please log in.");
        return true;
    };

    const loginUser = (identifier, password) => {
        // NOTE: Password is not checked as we are not storing it. This is a simulation.
        const userExists = Object.entries(users).find(
            ([username, userData]) => username === identifier || userData.email === identifier
        );

        if (userExists) {
            const [username] = userExists;
            setCurrentUser(username);
            toast.success(`Welcome back, ${username}!`);
            return true;
        } else {
            toast.error("User not found.");
            return false;
        }
    };

    const logoutUser = () => {
        setCurrentUser(null);
        toast.success("You have been logged out.");
    };
    
    // --- Updated Save/Unsave Functions ---
    const addSavedArticle = (article) => {
        if (!currentUser) {
            toast.error("Please log in to save articles.");
            return;
        }
        const userArticles = allSavedArticles[currentUser] || [];
        const newSavedList = [...userArticles, article];
        const newAllData = { ...allSavedArticles, [currentUser]: newSavedList };
        
        setAllSavedArticles(newAllData);
        localStorage.setItem('allUsersSavedArticles', JSON.stringify(newAllData));
        toast.success('Article Saved!');
    };

    const removeSavedArticle = (articleToRemove) => {
        if (!currentUser) return;
        const userArticles = allSavedArticles[currentUser] || [];
        const newSavedList = userArticles.filter(
            (article) => article.url !== articleToRemove.url
        );
        const newAllData = { ...allSavedArticles, [currentUser]: newSavedList };

        setAllSavedArticles(newAllData);
        localStorage.setItem('allUsersSavedArticles', JSON.stringify(newAllData));
        toast.error('Article Removed!');
    };
    
    const savedArticles = useMemo(() => {
        return currentUser ? allSavedArticles[currentUser] || [] : [];
    }, [currentUser, allSavedArticles]);

    const toggleTheme = () => setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));

    const apiKey = 'b55a68ba3d824788bd8618ff5bddbacf'; 

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                let url;
                if (searchTerm) {
                    url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`;
                } else {
                    url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;
                }
                const response = await axios.get(url);
                const articles = response.data.articles.filter(article => article.urlToImage);
                setNews(articles);

                if (category === 'general' && !searchTerm) {
                    setTopStories(articles.slice(0, 5));
                }

            } catch (error) {
                console.error("Error fetching news:", error);
            }
            setLoading(false);
        };
        fetchNews();
    }, [category, searchTerm]);

    return (
        <GeneralContext.Provider value={{ 
            news, topStories, setCategory, searchTerm, setSearchTerm, loading, theme, toggleTheme,
            currentUser, signupUser, loginUser, logoutUser, savedArticles, addSavedArticle, removeSavedArticle
        }}>
            {children}
        </GeneralContext.Provider>
    );
};

export default GeneralContextProvider;