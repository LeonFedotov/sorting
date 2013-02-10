var _   = require('underscore');
exports.randomArray = function(length) {
	return _.range(length).map(function() {
		return parseInt(Math.random()*length, 10);
	});
};
exports.arraySwap = function(arr, x, y) {
	var tmp = arr[x];
	arr[x] = arr[y];
	arr[y] = tmp;
};