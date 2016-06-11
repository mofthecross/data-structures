

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
  // if (this._size > (this._limit * .75)) {
  //   this._increaseLimit();
  // }
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
// HashTable.prototype._increaseLimit = function() {
//   //store current values outside HashTable
//   var tempStorage = [];
//   _.each(this._storage, function(val, key) {
//     if (val === null)
//   });
  //increase the table limit
  //create a new table with the new limit
  //re add all values to new table
// };



/*
 * Complexity: What is the time complexity of the above functions?
 insert: usually O(1), but with many keys with the same Hash, O(n);
 retrieve: usually O(1), but with many keys with the same Hash, O(n);
 remove: usually O(1), but with many keys with the same Hash, O(n);
 */


