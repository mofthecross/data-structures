var Queue = function() {
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
