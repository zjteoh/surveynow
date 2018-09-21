import React, { Component } from 'react';
import '../css/style.css';
//import { Slider, Slide } from 'react-materialize';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="landing-title fade-animation">
					<h1>
						<span className="landing-text-style">Hello there</span> 
					</h1>

					<p className="landing-text-style"><h5>Send surveys easily by using SendGrid API</h5></p>

					<div className="footer">
						<p className="landing-text-style" style={{'margin': '0'}}>Powered by</p>

						<img className="resize" src="https://www.codeimmersives.com/wp-content/uploads/2018/06/MERN-Logo-4-pack.jpg"/>
					</div>
				</div>
			</div> 
		);
	}
}

export default Landing;
