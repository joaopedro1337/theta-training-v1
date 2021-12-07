const mongoose = require('mongoose');
mongoose.Promise = Promise;

module.exports = (uri) => {
	
	mongoose.connect(uri);
	const conn = mongoose.connection;
	
	conn.on('connected', () => 
	console.log('\n Connected! ' + uri));
	
	conn.on('disconnected', () => 
	console.log('\n Disconnected from ' + uri));
	
	conn.on('error', err =>
	console.log('\n Connection error: ' + err));
	
	process.on('SIGINT', () => conn.close(() => {
		console.log('\n Disconnected :(');
		process.exit(0);
	}));
};