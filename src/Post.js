import React from 'react';
import "./Post.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from './Stateprovider';



function Post({ profilePic, image, username, timestamp, message }) {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic} className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>
            </div>

            <div className="post__bottom">
                <p>{message}</p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
        
            <div className="post__options">
                <div className="post__option">
                    
                </div>
            </div>

        </div>
    )
}

export default Post
