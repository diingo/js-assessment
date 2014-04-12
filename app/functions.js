if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        var greeting = fn(arr[0], arr[1], arr[2]);
        return greeting;
    },

    speak : function(fn, obj) {
        window.obj = obj;
        obj.speak = fn;
        console.log(obj)
        return obj.speak();
    },

    functionFunction : function(str) {
        return function(str2) {
            return str + ", " + str2;
        };
    },

    makeClosures : function(arr, fn) {

        var newArr = [];
        var elem;

        var addFn = function (val) {
            newArr.push(function() {
                return fn(val);
            });
        };

        for(var i = 0; i < arr.length; i+= 1) {
            elem = arr[i];
            addFn(elem);
        }

        return newArr;

        // This doesn't work - good to look back and see why
        // var newArr = [];

        // for(var i = 0; i < arr.length; i+= 1) {

        //     var elem = arr[i];
        //     newArr.push(function() {
        //         return fn(elem);
        //     });
        // }

        // return newArr;
    },

    partial : function(fn, str1, str2) {

    },

    useArguments : function() {

    },

    callIt : function(fn) {

    },

    partialUsingArguments : function(fn) {

    },

    curryIt : function(fn) {

    }
  };
});
