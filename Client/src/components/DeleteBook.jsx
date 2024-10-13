import React, { useState } from 'react';
import { deleteBook } from '../../src/services/Book_Service';

function DeleteBook() {
  const [bookId, setBookId] = useState(''); 
  const [message, setMessage] = useState('');

  const handleDelete = () => {
    deleteBook(bookId)
      .then((resp) => {
        console.log(resp);
        setMessage('Book deleted successfully!'); 
        setBookId('');
      })
      .catch((error) => {
        console.error('Error deleting book:', error);
        setMessage('Failed to delete book. Please try again.');
      });
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>Delete a Book</h2>
      <input
        type="text"
        placeholder="Enter Book ID"
        value={bookId}
        onChange={(e) => setBookId(e.target.value)} 
      />
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>
        Delete Book
      </button>

     
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
}

export default DeleteBook;
