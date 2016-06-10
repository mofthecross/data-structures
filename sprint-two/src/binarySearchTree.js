var BinarySearchTree = function(value) {
  var obj = {};

  obj.value = value;
  obj.left = undefined;
  obj.right = undefined;

  obj.insert = function(val) {
    if (val < this.value) {
      if (this.left === undefined) {
        this.left = BinarySearchTree(val); 
      } else {
        this.left.insert(val);
      }
    } else if (val > this.value) {
      if (this.right === undefined) {
        this.right = BinarySearchTree(val);
      } else {
        this.right.insert(val);
      }
    }
    

  };

  obj.contains = function(target) {

  };

  obj.depthFirstLog = function(cb) {

  };

  return obj;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
