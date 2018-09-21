const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSecretKey);

module.exports = app => {
	app.post('/api/stripe' , (req,res) => {
		stripe.charges.create({
			amount: 500,
			currency: 'usd',
			description: 'Donate $5',
			source: req.body.id
		})
		.then(charge => {
			req.user.credits += 5;

			req.user.save()
			.then(user => {
				res.send(user);
			});	
		});
	});
};