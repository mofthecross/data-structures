var FunctionalStack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.pop = function() {
    if (count !== 0) {
      count--;
      var out = storage[count];
      delete storage[count];
      return out;
    }
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};

var FunctionalQueue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0, first = 0, back = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[back] = value;
    size++;
    back++;
  };

  someInstance.dequeue = function() {
    if (size !== 0) {
      var out = storage[first];
      delete storage[first];
      size--;
      first++;
      return out;
    }
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};

var FunctionalSharedStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = {};
  _.extend(newStack, FSStackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;
  newStack.out; 
  return newStack;
};

var FSStackMethods = {
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
      this.out = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return this.out;
    }
  }
};

var FunctionalSharedQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = {};
  _.extend(newQueue, FSQueueMethods);
  newQueue.storage = {};
  newQueue.queueSize = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  return newQueue;
};

var FSQueueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this.storage[this.back] = value; 
    this.back++;
    this.queueSize++;
  }, 
  dequeue: function() {
    if (this.queueSize !== 0) {
      var out = this.storage[this.front];
      delete this.storage[this.front];
      this.front++;
      this.queueSize--;
      return out;
    }
  }
};

var PrototypalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newStack = Object.create(ProtoStackMethods);
  newStack.storage = {};
  newStack.stackSize = 0;
  newStack.out; 
  return newStack;
};

var ProtoStackMethods = {
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
      this.out = this.storage[this.stackSize];
      delete this.storage[this.stackSize];
      return this.out;
    }
  }
};

var PrototypalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(ProtoQueueMethods);
  newQueue.queueSize = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.storage = {};
  return newQueue;
};

var ProtoQueueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.queueSize++;
    this.back++;
  },
  dequeue: function() {
    if (this.queueSize !== 0) {
      var out = this.storage[this.front];
      delete this.storage[this.front];
      this.queueSize--;
      this.front++;
      return out;
    }
  }
};

var PseudoClassicalStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.stackSize = 0;
  this.storage = {};

};

PseudoClassicalStack.prototype.size = function() {
  return this.stackSize;
};

PseudoClassicalStack.prototype.push = function(value) {
  this.storage[this.stackSize] = value;
  this.stackSize++;
};

PseudoClassicalStack.prototype.pop = function() {
  if (this.stackSize !== 0) {
    this.stackSize--;
    var out = this.storage[this.stackSize];
    delete this.storage[this.stackSize];
    return out;
  }
};

var PsuedoClassicalQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.front = 0;
  this.queueSize = 0;
  this.back = 0;
  this.storage = {};
};

PsuedoClassicalQueue.prototype.size = function() {
  return this.queueSize;
};

PsuedoClassicalQueue.prototype.enqueue = function(value) {
  this.storage[this.back] = value;
  this.queueSize++;
  this.back++;
};

PsuedoClassicalQueue.prototype.dequeue = function() {
  if (this.queueSize !== 0) {
    var out = this.storage[this.front];
    delete this.storage[this.front];
    this.queueSize--;
    this.front++;
    return out;
  }
};