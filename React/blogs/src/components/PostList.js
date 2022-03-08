import React from "react";
import { connect } from 'react-redux';
import { fetchPostsAndUsers } from '../actions';
import UserHeader from "./UserHeader";

class PostList extends React.Component {

    componentDidMount() {
        this.props.fetchPostsAndUsers();
        // this.props.fetchUsers();
    }

    // getAuthor(id) {
    //     if(! this.props.authors) {
    //         return null;
    //     }

    //     return this.props.authors[id-1]['name'];
    // }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                            {/* <h4>Author: {this.getAuthor(post.userId)}</h4> */}
                        </div>
                        <UserHeader userId={post.userId} />
                    </div>
                </div>
            );
        });
    }

    render() {
        // console.log(this.props);

        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    // console.log('state = ',state);      //  Why is mapStateToProps executing on every re-render ?
    return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);