import React, { Component } from 'react'
import likes from '../assets/likes.jpg'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <img src= {likes} className="img-rounded" alt="this"/><br/>
                <div >
                <button className="btn btn-primary"><span className= "fas fa-thumbs-up"></span> Like</button>
                </div>
                <div>
                    <button className=" btn btn-danger"></button>
                </div>
                
            </div>
        )
    }
}

export default UserProfile
