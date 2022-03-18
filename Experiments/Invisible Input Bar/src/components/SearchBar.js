import React from 'react';

class SearchBar extends React.Component {
    state = { term : '' };

    // onInputChange(event) {
    //     console.log(event.target.value);
    // }

    // onInputClick() {
    //     console.log('Input clicked');
    // }

    componentDidUpdate() {
        console.log(this.state.term);
    }

    render() {
        return (
            <div className='ui segment'>
                <form className='ui form'>
                    <div className='field'>
                        <label>
                            My Search :
                            <br />
                            <input 
                                type='text' 
                                value=''
                                onChange={e => this.setState({ term : e.target.value }) }
                            />
                        </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;