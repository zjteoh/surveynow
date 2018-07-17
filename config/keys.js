if (process.env.NODE_ENV === 'production') {
	// in production mode -- return production keys
	module.exports = require('./prod');
}
else {
	// in development mode -- return development keys
	module.exports = require('./dev');
}