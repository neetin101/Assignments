import React from "react";
import { connect } from 'react-redux';
// import { fetchPostsAndUsers } from '../actions';

class UserHeader extends React.Component {
    render() {

        // console.log('Props = ',this.props);

        // const user = this.props.users.find(user => user.id === this.props.userId);

        if(!this.props.user) {
            return <h4>Loading...</h4>;
        }

        return <div className="header">{this.props.user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId) };
}

export default connect(mapStateToProps)(UserHeader);
