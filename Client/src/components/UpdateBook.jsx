import React, { useState } from 'react';
import './UpdateBook.css'; 
import { updateBookById } from '../services/Book_Service';

function UpdateBook() {
  const [bookId, setBookId] = useState('');
  const [bookDetails, setBookDetails] = useState({ name: '', price: '',bookId:'' });
  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookDetails({ ...bookDetails, [name]: value });
  };

  const handleUpdate = () => {
    if (!bookId || !bookDetails.name || !bookDetails.price) {
      setMessage('All fields are required.');
      return;
    }

    updateBookById(bookId, bookDetails)
      .then((response) => {
        setMessage(`Book with ID ${bookId} updated successfully!`);
        setBookId('');
        setBookDetails({ name: '', price: '' });
      })
      .catch((error) => {
        console.error("Error updating book:", error);
        setMessage('Failed to update book. Please try again.');
      });
  };

  return (
    <div className="update-book-container">
      <h2 className="update-book-title">Update a Book</h2>
      {message && <p>{message}</p>} {/* Display the message */}
      <input
        type="text"
        placeholder="Enter Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)}
        className="update-book-input"
      />
      <input
        type="text"
        name="name"
        value={bookDetails.name}
        placeholder="Book Name"
        onChange={handleChange}
        className="update-book-input"
      />
      <input
        type="text"
        name="price"
        value={bookDetails.price}
        placeholder="Book Price"
        onChange={handleChange}
        className="update-book-input"
      />
      <button onClick={handleUpdate} className="update-book-button">Update Book</button>
    </div>
  );
}

export default UpdateBook;
