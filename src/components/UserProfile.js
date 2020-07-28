import React, { Component } from 'react'
import likes from '../assets/likes.jpg'
import camera from '../assets/camera.jpg'
import thinkoutside from '../assets/think-outside.jpg'
class UserProfile extends Component {
    render() {
        return (
            <div className="col-md">
                <h1>User Profile </h1>
                <img src= {likes} className="img-rounded" alt="this"/><br/>
                <div>
                    <div className="col-xs-4">
                        <button className="btn btn-primary"><span className= "fas fa-thumbs-up"></span> Like</button>
                    </div>
                    <div className="col-xs-4">
                        <button className=" btn btn-danger">Dislike</button><br />
                        <input type="text" placeholder="Leave a comment"></input>
                        <button>post</button>
                    </div>

                    <img src={camera} alt="this" />
                    <div className="col-xs-4">
                    <button className="btn btn-primary">Like</button>
                    </div>
                    <div className="col-xs-4">
                    <button className=" btn btn-danger">Dislike</button><br />
                    <input type="text" placeholder="Leave a comment"></input>
                    
                        <button>post</button>
                    </div>
                    <img src={thinkoutside} alt="this" />
                    <div className="col-xs-4">
                    <button className="btn btn-primary">Like</button>
                    <button className=" btn btn-danger">Dislike</button><br />
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile
