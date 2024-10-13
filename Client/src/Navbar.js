import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook';
import DeleteBook from './components/DeleteBook';
import UpdateBook from './components/UpdateBook';
import ViewBooks from './components/ViewBook';
import Login from './components/Login';
import Home from './components/Home';
import './Navbar.css'; 

function Navbar() {
    return (
        <Router>
            <div>
                <nav className="navbar-container">
                    <div className="navbar-links">
                        <a href="/" className="navbar-link">Home</a>
                        <a href="/add-book" className="navbar-link">Add Book</a>
                        <a href="/delete-book" className="navbar-link">Delete Book</a>
                        <a href="/update-book" className="navbar-link">Update Book</a>
                        <a href="/view-books" className="navbar-link">View Books</a>
                        <a href="/login" className="navbar-link">Login</a>
                    </div>
                </nav>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/add-book" element={<AddBook />} />
                    <Route path="/delete-book" element={<DeleteBook />} />
                    <Route path="/update-book" element={<UpdateBook />} />
                    <Route path="/view-books" element={<ViewBooks />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default Navbar;
