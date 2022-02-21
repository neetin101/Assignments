import React from "react";
// import ReactDOM from "react-dom";
import faker from "faker";

const CommentDetails = (commentator) => {
    return (
        <div className="comment">
            <a href='/' className="avatar">
                <img alt="Avatar" src={faker.image.image()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {commentator.name}
                </a>
                <div className="metadata">
                    <span className="date">{commentator.meta}</span>
                </div>
                <div className="text">{commentator.content}</div>
            </div>
        </div>

    );
}

export default CommentDetails;