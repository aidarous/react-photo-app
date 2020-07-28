import React from 'react';
import HomePage from './components/HomePage'
import UserProfile from './components/UserProfile'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      
      <div className="row">
                    <nav className="navbar navbar-expand-md bg-light">
                    <Link to="/HomePage"> Home </Link>
                    <Link to="/UserProfile"> User Profile</Link>
                    <Link to="/bookmarks"> Bookmarks</Link>
                    </nav>
                    <form className="ml-auto">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn btn-default">Login</button>
                    </form>
      </div>     
      <Switch>
        <Route path='/HomePage'>
          <HomePage />
        </Route>
        <Route path="/UserProfile">
            <UserProfile />
          </Route>

            </Switch>
         

      
      
      
    </div>
    </Router>
  );
}

export default App;
