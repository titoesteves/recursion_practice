// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var arr = [];
    for(var i = 0; i < obj.length; i++) {
      if(typeof obj === 'function' || typeof obj === undefined) {
        break;
      }
      arr.push(stringifyJSON(obj[i]));
    }
    return '[' + arr.join(',') + ']';
  }

  if(obj && typeof obj === 'object') {
    var results = [];
    for(var prop in obj) {
      if(typeof obj[prop] === 'function' || typeof obj[prop] === undefined) {
        break;
      }
      results.push(stringifyJSON(prop) + ':' + stringifyJSON(obj[prop]));
    }
    return '{' + results.join(',') + '}';
  }
  return '' + obj;
};
