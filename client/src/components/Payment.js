import React, { Component } from 'react'
import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import * as actions from '../actions';

class Payment extends Component {
	render() {
		return (
			<div>
				<StripeCheckout
					name="SurveyNow"
					description="Donation keeps us alive"
					amount={500}
					token={token => this.props.handleToken(token)}
					stripeKey={process.env.REACT_APP_STRIPE_KEY}
				>
					<div className="center-align">
						<a className="waves-effect waves-light btn green lighten-1">
							Donate
							<i className="material-icons right">attach_money</i>
						</a>
					</div>
				</StripeCheckout>
			</div>
		);
	}
}

export default connect(null,actions)(Payment);