import React, { Component } from 'react'

import logo from '../assets/logo.jpg'
import somethinggreat from '../assets/something-great.jpg'

class HomePage  extends Component {
    render() {
        return (
            <div>
                <form className="ml-auto">
                        <input type="text" placeholder="Username" />
                        <input type="password" placeholder="Password" />
                        <button type="submit" className="btn btn-default">Login</button>
                </form>
                <h1> React Photo App</h1>
                <img src= {logo} className= "img-thumbnail" alt= "this" /><br />
                <img src= {somethinggreat} className= "img-thumbnail" alt= "this" />
                
                
                
            </div>
        
            
        );
    }
}

export default HomePage;