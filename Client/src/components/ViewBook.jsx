import React, { useState,useEffect } from 'react';
import { getAllBookData } from '../services/Book_Service';
import './ViewBook.css';
function ViewBook() {
 
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    getAllBookData()
      .then((resp) => {
        setBookList(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>BookId</th>
            <th>BookName</th>
            <th>BookPrice</th>
          </tr>
        </thead>
        <tbody>
          {bookList.map((book, index) => (
            <tr>
              <td>{book.bookId}</td>
              <td>{book.bookName}</td>
              <td>{book.bookPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>

  
    </div>
  );
}

export default ViewBook;


