import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";

import StreamForm from "./StreamForm";


const StreamCreate = props => {

    const onFormSubmit = formValues => {
        props.createStream(formValues);
    };

    return (
        <div>
            <h3>Create a Stream :</h3>
            <StreamForm onFormSubmit={onFormSubmit} />
        </div>
    );
};

export default connect(null, { createStream })(StreamCreate);







//  ----------------------------------------------------------------------------------------------------------------------------------------

// import React from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createStream } from "../../actions";

// class StreamCreate extends React.Component {

//     renderError({ error, touched }) {
//         if(error && touched) {
//             return (
//                 <div className="ui error message">
//                     <div className="header">{error}</div>
//                 </div>
//             );
//         }
//     }

//     renderInput = ({ input, label, meta }) => {
//         const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
//         return (
//             <div className={className}>
//                 <label>{label}</label>
//                 <input {...input} autoComplete="off" />
//                 {this.renderError(meta)}
//             </div>
//         );
//     }

//     onFormSubmit = (formValues) => {
//         console.log(formValues);
//         this.props.createStream(formValues);
//         // this.props.deleteStream(2);
//         // this.props.fetchStream(4);
//         // this.props.editStream(3, {...formValues, "id":2});
//     }
    
//     render() {
//         // console.log(this);
//         return (
//             <form onSubmit={this.props.handleSubmit(this.onFormSubmit)} className="ui form error">
//                 <Field name="title" component={this.renderInput} label="Enter Text" />
//                 <Field name="description" component={this.renderInput} label="Enter Description" />
//                 <button className="ui button primary">Submit</button>
//             </form>
//         );
//     }
// } 

// const validate = formValues => {
//     const errors = {};

//     if(!formValues.title) {
//         errors.title = "Please Enter a Valid Title";
//     }

//     if(!formValues.description) {
//         errors.description = "Please Enter a Valid Description";
//     }

//     return errors;
// }

// const formWrapped =  reduxForm({
//     form: 'StreamCreate',
//     validate
// })(StreamCreate);

// export default connect(null, { createStream })(formWrapped);