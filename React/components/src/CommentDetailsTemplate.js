// import React from "react";
// import faker from "faker";


const CommentDetailsTemplate = props=> {
    // console.log(props);
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img src={props.pic} alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">
                    {props.author}
                </a>
                <div className="metadata">{props.time}</div>
                <div className="text">{props.comment}</div>
            </div>
        </div>
    );
};


export default CommentDetailsTemplate;