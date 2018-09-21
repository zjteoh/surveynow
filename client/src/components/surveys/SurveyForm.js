import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import { reduxForm,  Field } from 'redux-form';

class SurveyForm extends Component {
	renderFields() {
		return (
			<div>
				<Field
					label="Survey Title" 
					type="text" 
					name="title"
					component={SurveyField} 
				/>

				<Field
					label="Subject line" 
					type="text" 
					name="subject" 
					component={SurveyField} 
				/>

				<Field
					label="Email body" 
					type="text" 
					name="body" 
					component={SurveyField} 
				/>

				<Field
					label="Email of recipients (space-separated)" 
					type="text" 
					name="recipients" 
					component={SurveyField} 
				/>
			</div>
		);
	}

	//this.handleSubmit is a prop provided by reduxForm automatically
	render() {
		return (
			<div className="fade-animation">
				<h3 style={{'fontFamily': 'Helevetica', 'color': 'grey'}}>Create new survey</h3>

				<form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
					{this.renderFields()}
					<Link to="/surveys/new" className="light-red btn-flat red white-text">
						Cancel
						<i className="material-icons right">cancel</i>
					</Link> 
					<button type="submit" className="light-green btn-flat right white-text"> 
						Review 
						<i className="material-icons right">done</i>
					</button>
				</form>
			</div>
		);
	}
}

export default reduxForm({
	validate: validate,
	form: 'surveyForm',
	destroyOnUnmount: false
})(SurveyForm);

function emailValidation(email) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function validate(values) {
	const error = {};

	if(values.recipients) {
		if (values.recipients.slice(-1) != ',') {
			values.recipients.split(' ').map(email => {
				if(!emailValidation(email.trim())) {
					error.recipients = "Recipients contain invalid email(s)";
				}

			})
		}
	}

	if(!values.title)
		error.title = "Title cannot be empty";

	if(!values.subject)
		error.subject = "Subject cannot be empty";

	if(!values.body)
		error.body = 'Body cannot me empty';

	if(!values.recipients)
		error.recipients = "Recipients cannot be empty";

	return error;

}

