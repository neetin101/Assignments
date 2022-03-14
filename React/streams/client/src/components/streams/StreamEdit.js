import _ from "lodash";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

import StreamForm from "./StreamForm";

const StreamEdit = props => {

    useEffect(() => {
        props.fetchStream(props.match.params.id);
    }, []);

    const onFormSubmit = formValues => {
        props.editStream(props.match.params.id, formValues);
    };

    if(!props.stream) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h3>Edit a Stream :</h3>
            <StreamForm initialValues={_.pick(props.stream, 'title', 'description')} onFormSubmit={onFormSubmit} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);




//  ---------------------------------------------------------------------------------------------------------------------------

// import React, { useEffect } from "react";
// import { connect } from "react-redux";
// import { fetchStream } from "../../actions";

// const StreamEdit = props => {
//     // console.log(props.match.params);
//     // console.log('second');

//     useEffect(() => {
//         props.fetchStream(props.match.params.id);
//     }, [props]);

//     if(!props.stream) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <div>
//             <h2>{props.stream.title}</h2>
//             <p>{props.stream.description}</p>
//         </div>
//     );
// };

// const mapStateToProps = (state, ownProps) => {

//     return { stream: state.streams[ownProps.match.params.id] };
//     // console.log('first');
//     // console.log(ownProps.match.params.id);
//     // console.log('state = ', state.streams);
//     // const { title, description } = state.streams[ownProps.match.params.id];
//     // console.log("detail = ", detail);
//     // return { title, description };
// }

// export default connect(mapStateToProps, { fetchStream })(StreamEdit);