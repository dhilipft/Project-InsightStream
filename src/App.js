import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import GeneralContextProvider, { GeneralContext } from './context/GeneralContext';
import NavbarComponent from './components/NavbarComponent';
import Footer from './components/Footer';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import NewsPage from './pages/NewsPage';
import SavedPage from './pages/SavedPage';
import NotFoundPage from './pages/NotFoundPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ChatPage from './pages/ChatPage';
import ChatBox from './components/ChatBox';
import './App.css';

function AppContent() {
  const { theme } = useContext(GeneralContext);
  return (
    <div className={`App ${theme}`}>
      <Toaster 
        position="top-center"
        containerStyle={{
          marginTop: '50px',
        }}
        toastOptions={{
          style: {
            background: theme === 'dark' ? '#333' : '#fff',
            color: theme === 'dark' ? '#fff' : '#333',
          },
        }}
      />
      <Router>
        <NavbarComponent />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category/:categoryName" element={<CategoryPage />} />
            <Route path="/search" element={<NewsPage />} />
            <Route path="/saved" element={<SavedPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
        
        {/* The ChatBox (floating button) is now correctly placed inside the Router */}
        <ChatBox />
      </Router>
    </div>
  )
}

function App() {
  return (
    <GeneralContextProvider>
      <AppContent />
    </GeneralContextProvider>
  );
}

export default App;