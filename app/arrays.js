if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
      var sum =  arr.reduce(function(a, b) {
            return a + b;
        });
      return sum;
    },


    remove : function(arr, item) {
      var checkItem = function() {
         if (arr[i] == item) {
            arr.splice(i, 1);
            checkItem();
          }
      };

      for( var i=0; i < arr.length; i++ ) {
        checkItem();
      }
      return arr;

    },

    // NOT DONE CORRECTLY
    removeWithoutCopy : function(arr, item) {
      // TODO

      var checkItem = function() {
         if (arr[i] == item) {
            arr.splice(i, 1);
            checkItem();
          }
      };

      for( var i=0; i < arr.length; i++ ) {
        checkItem();
      }
      return arr;
    },

    append : function(arr, item) {
      arr.push(item);
      return arr;
    },

    truncate : function(arr) {
      arr.splice(-1,1);
      return arr;
    },

    prepend : function(arr, item) {
      arr.splice(0,0,item);
      return arr;
    },

    curtail : function(arr) {
      arr.splice(0,1);
      return arr;
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      arr.splice(index, 0, item);
      return arr;
    },

    count : function(arr, item) {
      var item_count = 0
      for ( var i = 0; i < arr.length; i++ ) {
        if (arr[i] === item) {
          item_count += 1;
        }
      }
      return item_count;
    },

    duplicates : function(arr) {
      var arrCopy = arr.slice(0);
      var dupArr = [];
      for ( var i = 0; i < arr.length; i++) {
        var elem = arrCopy[i];

        // remove element at current index here
        // will next check to see if there's another of the same element in the array after it's removed
        arrCopy.splice(i,1);

        // check to see if duplicate element exists in array after splicing out once
        // also make sure dupArr doesn't already have that element
        if (arrCopy.indexOf(elem) != -1 && dupArr.indexOf(elem) == -1) {
          dupArr.push(elem)
        }
      }

      return dupArr;
    },

    square : function(arr) {
      for ( var i = 0; i < arr.length; i++ ) {
        arr[i] = arr[i] * arr[i];
      }
      return arr;
    },

    findAllOccurrences : function(arr, target) {
      // TODO
      var indexes = []
      for( var i = 0; i < arr.length; i++ ) {
        if (arr[i] == target) {
          indexes.push(i);
        }
      }
      return indexes;
    }
  };
});
