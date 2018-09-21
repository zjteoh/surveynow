import React, { Component } from 'react';

//props is passed on from SurveyForm
//contains various functions such as onBlur, onChange, .....
class SurveyField extends Component { 
	render() {
		return (
			<div className="row">
		        <div className="input-field col s12">
		          <input className={this.props.input.name === 'recipients' ? (emailHasError(this.props.meta) ? 'red-text' : 'green-text') : ''} 
		          		 style={{"marginBottom": 0}} 
		          		 id={this.props.input.name} 
		          		 type="text" 
		          		 {...this.props.input} 
		          />
		          <label htmlFor={this.props.input.name}>{this.props.label}</label>
		          <div className="red-text">
		          	{showErrorMessage(this.props.meta)}
		          </div>
		        </div>
			</div>
		);
	}
}

export default SurveyField;

function showErrorMessage(meta) {
	if(meta.error && meta.touched)
		return meta.error;
}

function emailHasError(meta) {
	if(meta.error && meta.touched)
		return true;
	else
		return false;
}

