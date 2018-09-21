const keys = require('../../config/keys');

module.exports = (survey) => {
	return `
		<html>
			<body style="text-align: center;">
				<h1>I'd like to hear more from you</h1>
				<p>We're conducting a survey and we need your help!</p>
				<p>${survey.body}</p>
				<div style="width:60%;margin-left:20%;margin-right:20%">
					<div style="width:50%; float:left; text-align: center">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">
							<h2>Yes</h2>
						</a>
					</div>

					<div style="width: 50%; float: left; text-align: center">
						<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">
							<h2>No</h2>
						</a>
					</div>
				</div>
			</body>
		</html>
	`;
};