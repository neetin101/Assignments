import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { fetchStreams } from "../../actions";

// class StreamList extends React.Component {
//     componentDidMount() {
//         this.props.fetchStreams();
//     }

//     render() {
//         console.log(this.props.streams);
//         // return <div>{JSON.stringify(this.props.streams)}</div>;
//         return <div>Hello</div>;
//     }
// }

const StreamList = props => {
    // console.log(props.streams);
    useEffect(()=> {
        props.fetchStreams();
    }, []);
    // props.fetchStreams();

    const renderAdminAccess = stream => {
        if(stream.userId === props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
                        EDIT
                    </Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">
                        DELETE
                    </Link>
                </div>
            );
        }
    };


    const renderList = () => {
        return props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                    {renderAdminAccess(stream)}
                    <i className="large middle aligned camera icon" />
                    <div className="content">
                        <Link to={`/streams/${stream.id}`} className='header'>
                            {stream.title}
                        </Link>
                        <div className="description">{JSON.stringify(stream)}</div>
                    </div>
                </div>
            );
        });
    };

    const renderCreateButton = () => {
        if(props.isSignedIn) {
            return (
                <div style={{ textAlign: 'right' }}>
                    <Link to="/streams/new" className="ui button primary">
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    return (
        <div>
            <h2>Streams</h2>
            <div className="ui celled list">{renderList()}</div>
            {renderCreateButton()}
        </div>
    );
};

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams), 
        isSignedIn: state.auth.isSignedIn,
        currentUserId: state.auth.userId
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
