var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var newQueue = Object.create(queueMethods);
  newQueue.queueSize = 0;
  newQueue.front = 0;
  newQueue.back = 0;
  newQueue.storage = {};
  return newQueue;
};

var queueMethods = {
  size: function() {
    return this.queueSize;
  },
  enqueue: function(value) {
    this.storage[this.back] = value;
    this.queueSize++;
    this.back++;
  }
};


