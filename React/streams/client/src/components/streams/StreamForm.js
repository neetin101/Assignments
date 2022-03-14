import React from "react";
import { Field, reduxForm } from "redux-form";


// If using StreamForm as Functional Component, then input is lagging. Why????

class StreamForm extends React.Component {

    renderError = ({ error, touched }) => {
        if(error && touched) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    };

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onFormSubmit)} className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="description" component={this.renderInput} label="Enter Description" />
                <button className="ui button primary">Submit</button>
            </form>
        );
    }

}

const validate = formValues => {
    const errors = {};

    if(!formValues.title) {
        errors.title = "Please Enter a Valid Title";
    }

    if(!formValues.description) {
        errors.description = "Please Enter a Valid Description";
    }

    return errors;
}

export default reduxForm({
    form: 'streamForm',
    validate
})(StreamForm);

