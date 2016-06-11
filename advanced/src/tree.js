var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;

  // your code here
  _.extend(newTree, treeMethods);
  newTree.children = [];     

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
  this.children[this.children.length - 1].parent = this;
};

treeMethods.contains = function(target) {
  var res = false;
  if (this.value === target) {
    return true; 
  } else {
    for (var i = 0; i < this.children.length && res === false; i++) {
      res = this.children[i].contains(target);
    }
  }
  return res;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1)
 contains = O(n)
 */
