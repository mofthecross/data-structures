var DoubleLinkedList = function() {
  this.list = {};
  this.head = null;
  this.tail = null;
};

DoubleLinkedList.prototype.addToHead = function(value) {
  
};

DoubleLinkedList.prototype.addToTail = function(value) {
  this.list[value] = Node(value);
  if (this.head === null) {
    this.head === this.list[value];
    this.tail === this.list[value];
  } else {
    this.tail === this.
  }
};

DoubleLinkedList.prototype.contains = function(target) {
  // body...
};

DoubleLinkedList.prototype.removeHead = function() {
  // body...
};

DoubleLinkedList.prototype.removeTail = function() {
  // body...
};

DoubleLinkedList.prototype.listForwards = function() {
  // body...
};

DoubleLinkedList.prototype.listBackwards = function() {
  // body...
};

DoubleLinkedList.prototype.Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.prev = null;

  return node;
};