/*jshint expr:true, boss: true */
var _   = require('underscore'),
	lib = require('./lib'),
	quickSort = function(array) {

		if(array.length <= 1) {
			return array;
		}

		var pivot = array.pop(),
			less = [],
			more = [];

		array.forEach(function(current) {
			if(current <= pivot) {
				less.push(current);
			} else {
				more.push(current);
			}
		});

		return quickSort(less).concat(pivot, quickSort(more));
	};
	unsorted = lib.randomArray(100);

console.log(unsorted.toString());
console.log(quickSort(unsorted).toString());