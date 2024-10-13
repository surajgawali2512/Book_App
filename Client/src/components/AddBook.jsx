import React, { useState } from 'react';
import './AddBook.css';
import { addBookData } from '../services/Book_Service';

function AddBook() {
  const [book, setBook] = useState({ bookName: '', bookPrice: '' });
  const [message, setMessage] = useState(''); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSubmit = () => {
    console.log('Book added:', book);

    addBookData(book)
      .then((resp) => {
        console.log(resp);
        setMessage('Book added successfully!'); 
        setBook({ bookName: '', bookPrice: '' });  
      })
      .catch((error) => {
        console.error('Error adding book:', error);
        setMessage('Failed to add book. Please try again.'); 
      });
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Add a New Book</h2>
      <input
        type="text"
        name="bookName"
        placeholder="Book Name"
        value={book.bookName}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <input
        type="text"
        name="bookPrice"
        placeholder="Book Price"
        value={book.bookPrice}
        onChange={handleChange}
        style={{ margin: '5px' }}
      />
      <button onClick={handleSubmit} style={{ marginTop: '10px' }}>Add Book</button>

      {/* Display success/error message */}
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default AddBook;
