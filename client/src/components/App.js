import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import { connect } from 'react-redux';
import * as actions from '../actions';
import SurveyNew from './surveys/SurveyNew';
import SurveyList from './surveys/SurveyList';

class App extends Component {
	componentDidMount() {
		this.props.fetchUser();
		console.log(actions);
	}

	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Header/>
							<div className="container">
								<Route exact path="/" component={Landing}/>
								<Route path="/surveys/new" component={SurveyNew}/>
								<Route path="/" component={Dashboard}/>
								<Route exact path="/surveys" component={SurveyList}/>
							</div>
					</div>
				</BrowserRouter>
			</div>
		)
	}
}

export default connect(null,actions)(App);