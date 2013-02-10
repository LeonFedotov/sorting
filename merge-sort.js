/*jshint expr:true, boss: true */
var _   = require('underscore'),
	lib = require('./lib'),
	merge = function(left, right) {
		var result = [];

		while(left.length > 0 && right.length > 0) {
			result.push(
				(left[0] <= right[0]) ? left.shift() : right.shift()
			);
		}

		if(left.length > 0) {
			return result.concat(left);
		} else {
			return result.concat(right);
		}

	},

	mergeSort = function(array) {
		if(array.length <= 1) {
			return array;
		}

		return merge(
			mergeSort(
				array.splice(0, array.length/2)
			),
			mergeSort(array)
		);
	};

	unsorted = lib.randomArray(100);

console.log(unsorted.toString());
console.log(mergeSort(unsorted).toString());