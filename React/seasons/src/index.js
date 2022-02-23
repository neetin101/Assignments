import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner.js';


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

    state = { lat : null, errorMessage : ''};
    // constructor(props) {
    //     super(props);

    //     // console.log(this.props);
    //     // console.log(this.context);
    // }
    
    componentDidMount() {
        console.log("Component has been Mounted just now.");
        window.navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position);
                this.setState({ lat : position.coords.latitude });
            },
            err => this.setState({ errorMessage : err.message })
        );
    }

    componentDidUpdate() {
        console.log("My component got re-rendered");
    }

    renderContent() {
        if(this.state.lat && !this.state.errorMessage) {
            return <SeasonDisplay lat={this.state.lat} />
        }

        if(!this.state.lat && this.state.errorMessage) {
            return <div>Error : {this.state.errorMessage}</div>;
        }

        return <Spinner message="Please allow loacation request..." />;
    }

    render() {  

        return (
            <div className='red'>
                {this.renderContent()}
            </div>
        );
        

        // return (
        //     <div>
        //         Latitude : {this.state.lat}
        //         <br />
        //         Error : {this.state.errorMessage}
        //     </div>
        // );
    }

}


ReactDOM.render(<App />, document.querySelector('#root'));