(function (undefined) {
  var _;
  var mixins = {};
  if (typeof require === 'function') {
    _ = require(['lodash']);
    module.exports = mixins;
  } else {
    _ = window._;
  }

  mixins.get = function () {
    if (arguments.length === 0) {
      return void 0;
    }
    
    var a = arguments[0];
    for (var i = 1; i < arguments.length; i++) {
      if (a[arguments[i]] === void 0) {
        return void 0;
      }
      a = a[arguments[i]];
    }
    return a;
  };

  _.mixin(mixins);
}).call(this);

