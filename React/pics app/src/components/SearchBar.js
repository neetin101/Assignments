import React from 'react';

class SearchBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { term : '' };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        
    }

    // onInputChange(event) {
    //     console.log(event.target.value);
    //     console.log(this.state.term);
    // }

    // onInputClick() {
    //     console.log('Input clicked');
    // }

    // componentDidUpdate() {
    //     console.log(this.state.term); 
    // }

    onFormSubmit(event) {
        event.preventDefault();

        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onFormSubmit} className='ui form'>
                    <div className='field'>
                        <label>
                            My Search :
                            <br />
                            <input 
                                type='text' 
                                value={ this.state.term }
                                onChange={ e => this.setState({ term : e.target.value }) }
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;