var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = _.extend(stackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;
  return newStack;
};

var stackMethods = {
  size: function() {
    return this.stackSize;
  },
  push: function(value) {
    this.storage[this.stackSize] = value;
    this.stackSize++;
  },
  pop: function() {
    if (this.stackSize !== 0) {
      this.stackSize--;
      var out = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return out;
    }
  }
};


