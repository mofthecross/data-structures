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
    if (this.value === target) {
      return true;
    } else if (target < this.value) {
      if (this.left === undefined) {
        return false;
      } else {
        return this.left.contains(target);
      }
    } else if (target > this.value) {
      if (this.right === undefined) {
        return false;
      } else {
        return this.right.contains(target);
      }
    }
  };

  obj.depthFirstLog = function(cb) {
    cb(this.value);
    if (this.left !== undefined) {
      this.left.depthFirstLog(cb);
    }
    if (this.right !== undefined) {
      this.right.depthFirstLog(cb);
    }
  };
  return obj;
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log(n))
 contains: O(log(n))
 deptFirstLog: O(n)
 */
