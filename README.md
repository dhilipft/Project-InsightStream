InsightStream 📰

InsightStream is a modern, feature-rich news application built with React. It provides a dynamic and engaging platform for users to browse, search, and save news articles from around the world. The application features a sleek user interface with light and dark modes, a simulated multi-user environment for saving articles, and a clean, responsive design.

Features

Live News Feed: Fetches and displays top headlines from a global news API.

Categorized Browsing: Users can browse news by categories like Business, Technology, Entertainment, and Sports.

Advanced Search: A powerful search bar to find articles on any topic.

Light & Dark Mode: A theme toggle for a comfortable viewing experience at any time of day.

Simulated User Accounts: A browser-based multi-user system that allows different "users" to save articles.

Registration & Login: Simulated signup and login pages.

Saved Articles: A dedicated "Saved" page for each user to view their bookmarked articles.

Customer Support Chat: A full-page, customer support demonstrations.

Page Transitions: Smooth zoom-in animations for a fluid user experience.

Toast Notifications: Non-intrusive notifications for actions like saving or removing articles.

Responsive Design: A clean, modern UI that works well on different screen sizes.

Tech Stack

Frontend: React.js

Routing: React Router DOM

API Calls: Axios

Styling: CSS3 (with Flexbox and Grid)

Icons: Font Awesome

Notifications: React Hot Toast

Getting Started

To get a local copy up and running, follow these simple steps.

Prerequisites
Node.js and npm: Make sure you have Node.js and npm installed on your machine. You can download them from nodejs.org.

Installation
Get a free API Key from https://newsapi.org

Clone the repository:

Bash
git clone https://github.com/dhilipft/Project-InsightStream

Navigate into the project directory:

Bash
cd Project-InsightStream

Install NPM packages:

Bash
npm install

Enter your API key in src/context/GeneralContext.jsx:

JavaScript
const apiKey = 'YOUR_NEWS_API_KEY'; 

Start the development server:

Bash
npm start

The application will be available at http://localhost:3000.
