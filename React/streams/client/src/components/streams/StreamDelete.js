import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";


const StreamDelete = props => {

    useEffect(()=> {
        props.fetchStream(props.match.params.id);
    }, []);

    const actions = (
            <React.Fragment>
                {props.stream ? <button onClick={()=> props.deleteStream(props.stream.id)} className="ui button negative">Delete</button> : ''}
                {/* <button onClick={()=> history.push('/')} className="ui button">Cancel</button> */}
                <Link to='/' className="ui button">Cancel</Link>
            </React.Fragment>
    );

    const content = props.stream ? (
        <div>
            <h4>Title :</h4>
            <p>{props.stream.title}</p>
            <h4>Description :</h4>
            <p>{props.stream.description}</p>
        </div>
    ) : 'Loading ... ';

    // if(!props.stream) {
    //     return <div>Loading...</div>;
    // }

    const title = (
        <div>
            <span>Delete Stream</span>
            <Link to='/'>
                <i className="close icon" style={{ textAlign: 'right' }} />
            </Link>
        </div>
    );

    return (
        <div>
            Stream Delete Option
            <Modal 
                title='Delete Stream'
                content={content}
                actions={actions}
                onDismiss={()=> history.push('/')}
            />
        </div>
    );
}



// class StreamDelete extends React.Component {

//     componentDidMount() {
//         this.props.fetchStream(this.props.match.params.id);
//     }

//     renderActions () {
//         return (
//             <React.Fragment>
//                 <button className="ui button negative">Delete</button>
//                 <button className="ui button">Cancel</button>
//             </React.Fragment>
//         );
//     }

//     render() {
//         return (
//             <div>
//                 Stream Delete Option
//                 <Modal 
//                     title="Delete Stream"
//                     content="Are you sure you really want to delete this stream ?"
//                     actions={this.renderActions()}
//                     onDismiss={()=> history.push('/')}
//                 />
//             </div>
//         );
//     }

// }

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);