var config = require('./config'),
	mongoose = require('mongoose');

module.exports = function() {
	var db = mongoose.connect(config.db);
	require('../app/models/photo.server.model');
	require('../app/models/reply.server.model')
	return db;
};