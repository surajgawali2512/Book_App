import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import ViewBook from './components/ViewBook';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/add-book">Add Book</Link></li>
            <li><Link to="/delete-book">Delete Book</Link></li>
            <li><Link to="/update-book">Update Book</Link></li>
            <li><Link to="/view-book">View Book</Link></li>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/delete-book" element={<DeleteBook />} />
          <Route path="/update-book" element={<UpdateBook />} />
          <Route path="/view-book" element={<ViewBook />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
