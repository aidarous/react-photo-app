import React, { Component } from 'react'
import likes from '../assets/likes.jpg'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <img src= {likes} />
            </div>
        )
    }
}

export default UserProfile
