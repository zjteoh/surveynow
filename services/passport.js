const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const moongoose = require('mongoose');

// model class
const User = moongoose.model('users');

// called during login (passport.authenticate)
// to determine what data from the user object should be stored in the session
passport.serializeUser((user, done) => {
	done(null, user.id);
});

// called on any subsequent requests
// id is from req.session.passport.user
passport.deserializeUser((id, done) => {
	User.findById(id)
		.then(user => {
			done(null, user);
		});
});

// on done(), will call passport login() which calls serializeUser()
passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: '/auth/google/callback',
			proxy: true
		}, 
		(accessToken, refreshToken, profile, done) => {
			User.findOne({googleID: profile.id})
				.then((existingUser) => {
					if(!existingUser) {
						new User({googleID: profile.id})
						.save()
						.then(user => {
							done(null, user);
						});

					}
					else {
						done(null, existingUser);
					}
				});
		}
	)
);