import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';


// const cbFunc = position => {
//     console.log(position);
// }


// const App = ()=> {
//     if('geolocation' in navigator) {
//         console.log('hai bhai');
//         console.log(navigator.geolocation.getCurrentPosition(cbFunc));
//     } else {
//         console.log('Nahi hai');
//     }

//     const currentMonth = new Date().getMonth();
//     console.log('currentMonth = ', currentMonth);

//     return (
//         <div>
//             <SeasonDisplay season="winter" />
//         </div>
//     );
// };

class App extends React.Component {

    render() {

        console.log(1);
        
        await window.navigator.geolocation.getCurrentPosition(
            position => console.log(position),
            err => console.log(err)
            );
            
        console.log(2);
        return (<div>Latitude : </div>);
    }

}

ReactDOM.render(<App />, document.querySelector('#root'));