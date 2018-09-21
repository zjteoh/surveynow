import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		if(this.props.auth) {
			return (
				<div>
					<div className="fixed-action-btn">
						<Link to="/surveys" className="btn-floating btn-large waves-effect waves-light red">
							<i className="large material-icons">menu</i>
						</Link>

						<ul>
						    <li><Link to="/surveys/new" className="btn-floating green"><i className="material-icons">add</i></Link></li>
		 				</ul>
					</div>
				</div>
			);
		}
		else {
			return null;
		}
	}
}

function mapStateToProps(state) {
	return {
		auth: state.auth
	};
}

export default connect(mapStateToProps,null)(Dashboard);