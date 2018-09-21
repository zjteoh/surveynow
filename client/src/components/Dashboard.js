import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Dashboard extends Component {
	render() {
		if(this.props.auth) {
			return (
				<div>
					<div className="fixed-action-btn">
						<Link to="/surveys/new" className="btn-floating btn-large waves-effect waves-light green" style={{'margin': '5px'}}>
							<i className="large material-icons">add</i>
						</Link>

						<Link to="/surveys" className="btn-floating btn-large waves-effect waves-light red" style={{'margin': '5px'}}>
							<i className="large material-icons">menu</i>
						</Link>
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