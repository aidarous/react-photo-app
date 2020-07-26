import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import logo from '../assets/logo.jpg'
import somethinggreat from '../assets/something-great.jpg'
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
                </div>

                <h1> React Photo App</h1>
                <img src= {logo} className= "img-thumbnail" alt= "this" /><br />
                <img src= {somethinggreat} className= "img-thumbnail" alt= "this" />
                
                
            </div>
        </Router>
            
        );
    }
}

export default HomePage;