import React, { useState } from 'react';


const SearchBar = ({ defaultSearchText, onSubmit }) => {
    const [term, setTerm] = useState(defaultSearchText);

    const onFormSubmit = event => {
        event.preventDefault();
        onSubmit(term);
    };

    return (
        <div className='search-bar ui segment'>
            <form onSubmit={onFormSubmit} className='ui form'>
                <div className='field'>
                    <label>Video Search :</label>
                    <input 
                        type='text'
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                    />
                </div>
            </form>
        </div>
    );
};


// class SearchBar extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { term: props.defaultSearchText };

//         this.onFormSubmit = this.onFormSubmit.bind(this);
//     }

//     onFormSubmit(event) {
//         event.preventDefault();
//         this.props.onSubmit(this.state.term);
//     }

//     render() {
//         return (
//             <div className='search-bar ui segment'>
//                 <form onSubmit={this.onFormSubmit} className='ui form'>
//                     <div className='field'>
//                         <label>Video Search :</label>
//                         <input 
//                             type='text'
//                             value={this.state.term}
//                             onChange={e => this.setState({ term: e.target.value })}
//                         />
//                     </div>
//                 </form>
//             </div>
//         );
//     }

// }

export default SearchBar;