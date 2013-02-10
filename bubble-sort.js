/*jshint expr:true, boss: true */
var _   = require('underscore'),
	lib = require('./lib'),
	bubbleSort = function(array) {
		var len = array.length, newLen;
		if(len <= 1) { return array; }
		do {
			newLen = 0;
			for(var index = 1;index < len;index++) {
				if(array[index-1] > array[index]) {
					lib.arraySwap(array, index-1, index);
					newLen = index;
				}
			}
			len = newLen;
		} while(len);
		return array;
	},
	unsorted = lib.randomArray(100);

console.log(unsorted.toString());
console.log(bubbleSort(unsorted).toString());