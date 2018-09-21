import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import * as actions from '../../actions';

function renderFields(values) {
	return (
		<div>
			<div>
				<label>Survey Title</label>
				<p style={{'marginTop':'0'}}>{values.title}</p>
			</div>

			<div>
				<label>Subject Line</label>
				<p style={{'marginTop':'0'}}>{values.subject}</p>
			</div>

			<div>
				<label>Email Body</label>
				<p style={{'marginTop':'0'}}>{values.body}</p>
			</div>

			<div>
				<label>Recipients' Emails</label>
				<p style={{'marginTop':'0'}}>{values.recipients}</p>
			</div>
		</div>
	);
}


const SurveyReviewForm = (props) => {
	console.log(props)
	return (
		<div>
			<h3 style={{'fontFamily': 'Helevetica','color': 'grey'}}>Review your survey</h3>
			{renderFields(props.formValues)}
			<button onClick={props.onCancelReview} className="light-red btn-flat left white-text"> 
				Back 
				<i className="material-icons right">cancel</i>
			</button>

			<button onClick={() => {props.submitSurvey(props.formValues, props.history)}} className="light-blue btn-flat right white-text"> 
				Done 
				<i className="material-icons right">done</i>
			</button>
		</div>
	);
}

function mapStateToProps(state) {
	return {
		formValues: state.form.surveyForm.values
	};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyReviewForm));