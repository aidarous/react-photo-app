import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from '../assets/logo.jpg'
import somethinggreat from '../assets/something-great.jpg'
import UserProfile from './UserProfile'
class HomePage  extends Component {
    render() {
        return (
        <Router>
            <div>
                <div>
                    <nav>
                    <Link to="/home"> Home </Link>
                    <Link to="/user-profile"> User Profile </Link>
                    <Link to="/bookmarks"> Bookmarks </Link>
                    </nav>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit">Login</button>
                    </form>
                </div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    
                    <Route path="/user-profile">
                        <UserProfile />
                    </Route>

                </Switch>

                <h1> React Photo App</h1>
                <img src= {logo} className= "img-thumbnail" alt= "this" /><br />
                <img src= {somethinggreat} className= "img-thumbnail" alt= "this" />
                
                
                
            </div>
        </Router>
            
        );
    }
}

export default HomePage;