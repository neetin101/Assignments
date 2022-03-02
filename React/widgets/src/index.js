import React, {useState} from "react";
import ReactDOM from 'react-dom';
import App from './components/App';





// The following block of code runs 3 tiimes, and not two

// let x = 9;

// const App =()=> {
//     const [count, setCount] = useState(0);
    
//     setTimeout(()=>{
//         x++;
//         setCount(5);
//     }, 3000);
//     console.log('hello', x);

//     return <h1>{count}</h1>;
// };


ReactDOM.render(<App />, document.querySelector('#root'));