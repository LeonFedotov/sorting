/*jshint expr:true, boss: true */
var _   = require('underscore'),
	lib = require('./lib'),
	insertSort = function(array) {
		return array.reduce(function(array, value) {
			for(var key = array.length-1, j = 0; key >= j;key--) {
				if(value >= array[key]) {
					array.splice(key+1, 0, value);
					return array;
				}
			}
			array.unshift(value);
			return array;
		}, []);
	};

	unsorted = lib.randomArray(10);

console.log(unsorted);
console.log(insertSort(unsorted));