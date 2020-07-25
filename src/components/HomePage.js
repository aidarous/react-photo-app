import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

class HomePage  extends Component {
    render() {
        return (
        <Router>
            <div>
                <nav>
                   <Link to="/home"> Home </Link>
                   <Link to="/home"> User Profile </Link>
                </nav>
                
            </div>
        </Router>
            
        );
    }
}

export default HomePage;