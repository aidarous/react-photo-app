import React, { Component } from 'react'
import likes from '../assets/likes.jpg'

class UserProfile extends Component {
    render() {
        return (
            <div>
                <h1>Profile</h1>
                <img src= {likes} className="img-rounded" alt="this"/><br/>
                <div>
                    <div className="col-xs-4">
                        <button className="btn btn-primary"><span className= "fas fa-thumbs-up"></span> Like</button>
                    </div>
                    <div className="col-xs-4">
                        <button className=" btn btn-danger">Dislike</button><br />
                        <input type="text" placeholder="Leave a comment"></input>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
