const passport = require('passport');

// passport.authenticate with start login stuff, and call serialize user eventually

module.exports = app => {
	app.get('/auth/google', 
		passport.authenticate('google', 
		{
			scope: ['profile', 'email'] 
		})
	);

	app.get('/auth/google/callback',
		passport.authenticate('google')
	);

	app.get('/api/logout', (req,res) => {
		req.logout();
		res.send("Not Logged In");
	});

	app.get('/api/current_user', (req,res) => {
		console.log(req.session);
		res.send(req.user);
	})
};