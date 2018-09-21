import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
	componentDidMount() {
		this.props.fetchSurveys();
	}

	getDateString(date) {
		const _date = new Date(date).toLocaleDateString();
		if(_date === "Invalid Date") {
			return "No Response";
		}
		else {
			return _date;
		}
	}

	renderSurveys() {
		if(this.props.auth) {
			return this.props.surveys.reverse().map(survey => {
				if(survey) {
					return (
						<div className="card cyan lighten-5" key={survey._id}>
							<div className="card-content">
								<span className="card-title"><b>Title:</b> {survey.title}</span>
								<p>
									<b>Body:</b> {survey.body}
								</p>
								<p className="right">
									<p><b>Date Sent:</b> {this.getDateString(survey.dateSent)}</p>
									<p><b>Last Responded:</b> {this.getDateString(survey.lastResponded)}</p>
								</p>

								<div className="card-action">
									<a>Yes: {survey.yes}</a>
									<a>No: {survey.no}</a>
								</div>
							</div>
						</div>
					);
				}
				else {
					return <div className="landing-title"><h3 className="landing-text-style">You have no surveys</h3></div>;
				}
			});
		}
		else {
			return <div className="landing-title"><h3 className="landing-text-style">You need to be logged in</h3></div>;
		}
	}

	render() {
		return (
			<div>
				{this.renderSurveys()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		surveys: state.surveys,
		auth: state.auth
	};
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);