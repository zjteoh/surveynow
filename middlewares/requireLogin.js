module.exports = (req, res, next) => {
	if (!req.user) {
		return res.status(401).send("You need to be logged in!");
	}

	next();
};