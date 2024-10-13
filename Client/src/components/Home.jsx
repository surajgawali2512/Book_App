import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to the Book Management System</h1>
      <p className="home-description">
        Manage your book collection efficiently! Use the options below to add, update, delete, or view books in your library.
      </p>
      
      <div className="home-buttons">
        <Link to="/add-book" className="home-button">Add Book</Link>
        <Link to="/view-book" className="home-button">View Books</Link>
        <Link to="/update-book" className="home-button">Update Book</Link>
        <Link to="/delete-book" className="home-button">Delete Book</Link>
      </div>
      
      <footer className="home-footer">
        <p>Explore the system and efficiently manage your collection.</p>
      </footer>
    </div>
  );
}

export default Home;
