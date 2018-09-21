import React, { Component } from 'react';
import SurveyForm from './SurveyForm';
import SurveyReviewForm from './SurveyReviewForm';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';


class SurveyNew extends Component {
	constructor(props) {
		super(props);
		this.state = { showReviewForm : false };
	}

	renderReviewForm() {
		if(this.props.auth) {
			if(this.state.showReviewForm === true) {
				return <SurveyReviewForm onCancelReview={() => {this.setState({ showReviewForm : false })}}/>;
			}
			else {
				return <SurveyForm onSurveySubmit={() => {this.setState({ showReviewForm : true})}}/>;
			}
		}
		else {
			return <div className="landing-title fade-animation"><h3 className="landing-text-style">You need to be logged in</h3></div>;
		}
	}

	render() {
		return (
			<div className="section">
				{this.renderReviewForm()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

SurveyNew = connect(mapStateToProps)(SurveyNew);

export default reduxForm({
	form: 'surveyForm'
})(SurveyNew);