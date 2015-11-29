// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var result = [];
  function recurse(node) {
    var parts = node.className.split(' ');
    if(parts.indexOf(className) > -1) {
      result.push(node);
    }
    for(var i = 0; i < node.children.length; i++) {
      recurse(node.children[i]);
    }
  }
  recurse(document.body);
  return result;
};
