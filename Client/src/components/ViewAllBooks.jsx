import React, { useState } from 'react';
import { getAllBookData } from '../services/Book_Service';
import './ViewBook.css';

function ViewAllBooks() {
  const [books, setBooks] = useState([]); 

  const handleViewAll = () => {
    getAllBookData()
      .then((response) => {
        setBooks(response);
        console.log("All Books:", response);
      })
      .catch((error) => {
        console.error("Error fetching all books:", error);
      });
  };

  return (
    <div className="view-all-container">
      <h2>View All Books</h2>
      <button className="view-all-button" onClick={handleViewAll}>
        View All Books
      </button>
      {books.length > 0 ? (
        <div className="book-list">
          {books.map((book, index) => (
            <div key={index} className="book-card">
              <h3>Book Details</h3>
              <p><strong>ID:</strong> {book.bookId}</p>
              <p><strong>Name:</strong> {book.name}</p>
              <p><strong>Price:</strong> {book.price}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No books to display. Click "View All Books" to load the list.</p>
      )}
    </div>
  );
}

export default ViewAllBooks;
