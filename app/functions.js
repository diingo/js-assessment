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
