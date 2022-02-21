import React from "react";
import ReactDOM from "react-dom";

let field = <h1>This is a heading</h1>;

// const App = () => field;

// function App() {
//     return <h1>This is a heading</h1>;
//     // field;
// }

const col = 'pink';

const App = () => {
    return (
        <div>
            <label className='label' htmlFor='name'>
                Enter name: 
            </label>
            <input id='name' type='text' />
            <button style={{backgroundColor:col, color:'green'}}>Submit</button>
        </div>

    );
};


ReactDOM.render(<App/>, document.querySelector('#root'));