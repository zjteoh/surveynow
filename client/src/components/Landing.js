import React, { Component } from 'react';
import '../css/style.css';
//import { Slider, Slide } from 'react-materialize';

class Landing extends Component {
	render() {
		return (
			<div>
				<div className="landing-title">
					<h1>
						<span className="landing-text-style">Hello there</span> 
					</h1>

					<p className="landing-text-style"><h5>Send surveys easily by using SendGrid API</h5></p>

					<div className="footer">
						<p className="landing-text-style">Powered by</p>

						<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpvWdMwn75fPMVZRPxZxJgC8GAfQTeslyxTL4nl-sXfEBQtslS"/>
					</div>
				</div>
			</div> 
		);
	}
}

export default Landing;
