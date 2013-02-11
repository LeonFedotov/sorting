/*jshint expr:true, boss: true */
var _   = require('underscore'),
    lib = require('./lib'),
    gnomeSort = function(array) {
        var pos = 1, last = 0;
        while(pos < array.length) {
            if(array[pos] >= array[pos-1]) {
                if(0 !== last) {
                    pos = last;
                    last = 0;
                }
                pos++;
            } else {
                lib.arraySwap(array, pos, pos-1);
                if(pos > 1) {
                    if(last === 0) {
                        last = pos;
                    }
                    pos--;
                } else {
                    pos++;
                }
            }
        }
        return array;
    };

    unsorted = lib.randomArray(10);

console.log(unsorted);
console.log(gnomeSort(unsorted));