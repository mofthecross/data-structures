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

treeMethods.removeFromParent = function() {
  //keep track of the 'parent' to be removed, named 'parentNode'
  var parentNode = this.parent;
  //keep track of 'this' node as the 'childNode'
  var childNode = this;
  //make 'childNode' forget its 'parent'
  childNode.parent = null;
  //make 'parentNode' forget 'this' from its 'children'
  _.each(parentNode.children, function(tempNode, key) {
    if (childNode.value === tempNode.value) {
      parentNode.children[key] = null;
    }
  });
  //return 'childNode' tree in order to keep track of it.
  return childNode;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addChild = O(1)
 contains = O(n)
 */
