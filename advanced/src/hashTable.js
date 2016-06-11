

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._size = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      return;
    }
  }
  bucket.push([k, v]);
  this._storage.set(index, bucket);
  this._size++;
  if (this._size > (this._limit * 3 / 4)) {
    this._increaseLimit();
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index) || [];
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i].splice(0);
    }
  }
};

HashTable.prototype._increaseLimit = function() {
  //store current values outside HashTable
  var table = this;
  var tempStorage = [];
  table._size = 0;
  table._storage.each(function(bucket, key) {
    if (bucket !== undefined) {
      _.each(bucket, function(item) {
        tempStorage.push(item);
      });
    } 
  });
  //increase the table limit
  table._limit = table._limit * 2;
  // create a new table with the new limit
  table._storage = LimitedArray(table._limit);

  // re add all values to new table 
  _.each(tempStorage, function(item) {
    table.insert(item[0], item[1]);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 insert: usually O(1), but with many keys with the same Hash, O(n);
 retrieve: usually O(1), but with many keys with the same Hash, O(n);
 remove: usually O(1), but with many keys with the same Hash, O(n);
 */


