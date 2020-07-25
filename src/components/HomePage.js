import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class HomePage  extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav>
                   <Link to="/home"> Home </Link>
                   <Link to="/user-profile"> User Profile </Link>
                   <Link to="/bookmarks"> Bookmarks </Link>
                </nav>
                <h1> Photo App</h1>
                
            </div>
        </Router>
            
        );
    }
}

export default HomePage;