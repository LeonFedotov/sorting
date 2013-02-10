var _   = require('underscore');
exports.randomArray = function(length) {
	return _.range(length).map(function() {
		return parseInt(Math.random()*length, 10);
	});
};