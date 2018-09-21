import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payment from './Payment';
import { SideNav, SideNavItem } from 'react-materialize'

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {			
			case null:
				return;
			case false:
				return (<li><a href="/auth/google">Sign in with Google</a></li>);
			default:
				return (
					[					
						<li key="3'">					
							<SideNav
							  trigger={<a>Account</a>}
							  options={{ closeOnClick: true }}
							>
								<SideNavItem>
									<Payment/>
								</SideNavItem>
							</SideNav>
						</li>,
						//<li key="2"><Payment/></li>,
						<li key="1"><a href="/api/logout">Logout</a></li>
					]
				);
		}
	}

	render() {
		return (
			<nav>
				<div className="nav-wrapper blue lighten-2" style={{'paddingLeft': '2%'}}>
					<Link to={'/'} className="left brand-logo">
						<span style={{'fontFamily': 'Helevetica'}}>SurveyNow</span>
					</Link>
					<ul className="right">
						{this.renderContent()}
					</ul>
				</div>
			</nav>
		)
	}
}

// this function is called everytime the redux store changes
function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps)(Header);