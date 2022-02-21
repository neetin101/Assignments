import React from 'react';
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetails from './CommentDetailsTemplate';
import ApprovalCard from './ApprovalCard';

// const App = () => {
//     return (
//         <div className='ui conntainer comments'>
//             <CommentDetails
//                 pic="logo512.png"
//                 author="Alex"
//                 time="Today at 5"
//                 comment="Nyc pic !!"
//             />
//             <CommentDetails
//                 pic={faker.image.image()}
//                 author="Sam"
//                 time="Yesterday at 6"
//                 comment="What an Idea !"
//             />
//             <CommentDetails
//                 pic={faker.image.image()}
//                 author="Jane"
//                 time="4 hours ago"
//                 comment="Not good :("
//             />
//         </div>
//     );
// };

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetails
                    pic="logo512.png"
                    author="Alex"
                    time="Today at 5"
                    comment="Nyc pic !!"
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetails
                    pic={faker.image.image()}
                    author="Sam"
                    time="Yesterday at 6"
                    comment="What an Idea !"
                />
            </ApprovalCard>

            <ApprovalCard>
                <CommentDetails
                    pic={faker.image.image()}
                    author="Jane"
                    time="4 hours ago"
                    comment="Not good :("
                />
            </ApprovalCard>
            
            
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
