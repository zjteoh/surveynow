const _ = require('lodash');
const { Path } = require('path-parser');
const { URL } = require ('url');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');
const Survey = mongoose.model('surveys');
const Mailer = require('../services/Mailer');
const surveyTemplate = require('../services/emailTemplates/surveyTemplate');

module.exports = app => {
	app.get('/api/surveys', requireLogin, async (req,res) => {
		const surveys = await Survey.find({_user: req.user.id}).select({recipients: false});
		res.send(surveys);
	});

	app.get('/api/surveys/:surveyId/:choice', (req,res) => {
		res.send('Thank you for participating in the survey');
	});

	app.post('/api/surveys', requireLogin, async (req,res) => {
		const { title, subject, body, recipients } = req.body;

		const survey = new Survey({
			title,
			subject,
			body,
			recipients: recipients.split(' ').map(email => ({ email: email.trim()})), 
			dateSent: Date.now(),
			_user: req.user.id
		});

		try {
			const mailer = new Mailer(survey, surveyTemplate(survey));
			await mailer.send();
			await survey.save();
			//const user = await req.user.save();
			res.send(req.user);
		}
		catch(err) {
			console.log(err);
			res.status(422).send(err);
		}
	});

	app.post('/api/surveys/webhook', (req,res) => {
		const p = new Path('/api/surveys/:surveyId/:choice');

		_.chain(req.body)
			.map(({ email, url}) => {
				const match = p.test(new URL(url).pathname);

				if(match) {
					return { email, surveyId: match.surveyId, choice: match.choice };
				}
			})
			.compact()
			.uniqBy('email', 'surveyId')
			.each(({surveyId, email, choice}) => {
				Survey.updateOne({
					_id: surveyId,
					recipients: {
						$elemMatch: {email: email, responded: false}
					}
				},
				{
					$inc: {[choice]: 1},
					$set: {'recipients.$.responded': true},
					lastResponded: new Date()
				}).exec();
			})
			.value();

		res.send({});
	})
};