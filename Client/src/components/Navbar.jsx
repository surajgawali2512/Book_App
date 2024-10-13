import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="App">
    <Router>
    
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/add-book" component={AddBook} />
        <Route path="/delete-book" component={DeleteBook} />
        <Route path="/update-book" component={UpdateBook} />
        <Route path="/view-books" component={ViewBooks} />
        <Route path="/login" component={Login} />
      </Switch>
    </Router>
    </div>
  );
}

export default Navbar;
