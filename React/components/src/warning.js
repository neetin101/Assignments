import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from "./CommentDetails";

const commentators = [
    {
        name: "Alex",
        meta: "Today at 5:00",
        content: "Great blog post !"
    },
    {
        name: 'Sam',
        meta: "Todat at 7:51",
        content: "Informative. Thanks."
    },
    {
        name: 'Jane',
        meta: "Today at 9:01",
        content: "Looks great"
    }
];


const comment = (commentator) => {
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
};

// const bundler = (arr)=> {
//     let result = [];
//     arr.forEach(ele)
// };

const App = () => {
    return (
        <div className="ui container comments">
            {commentators.map(commentator=>comment(commentator))}
            {/* {comment(commentators[0])}
            {comment(commentators[1])}
            {comment(commentators[2])} */}
        </div>
    );
};

// const App = ()=> CommentDetails();

// const App = ()=> {
//     return (
//         <div className="ui container comments">
//             <CommentDetails />
//         </div>
//     );
// }

ReactDOM.render(<App />, document.querySelector("#root"));