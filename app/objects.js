if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      obj.sayIt = fn;
      return obj.sayIt();
    },

    alterObjects : function(constructor, greeting) {
      // constructor.greeting = greeting;
    },

    iterate : function(obj) {
      // This gives the correct output except that it also adds 'bob: bip' to the array
      var array = [];
      for ( prop in obj ) {
        var string = "";
        string = string + prop + ": " + obj[prop];
        array.push(string);
      }
      return array;
    }
  };
});
