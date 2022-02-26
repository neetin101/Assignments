import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


// Consequence of duplicating key :
// const App = () => {
//     return (
//         <ul>
//             <li key="al">Hello</li>
//             <li key="bl">Hye</li>
//             <li key="al">Tata</li>
//             <li key="cl">Bye</li>
//         </ul>
//     );
// }

ReactDOM.render(<App />, document.querySelector('#root'));