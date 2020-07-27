import React, { Component } from 'react'
import likes from '../assets/likes.jpg'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <img src= {likes} className="img-rounded-circle" alt="this"/><br/>
                <button className="btn btn-primary">Like</button>
            </div>
        )
    }
}

export default UserProfile
