var DoubleLinkedList = function() {
  this.list = {};
  this.head = null;
  this.tail = null;
};

DoubleLinkedList.prototype.addToHead = function(value) {
  
};

DoubleLinkedList.prototype.addToTail = function(value) {
  this.list[value] = new Node(value);
  if (this.tail !== null) {
    this.list[value].prev = this.tail;
    this.tail.next = this.list[value];
  }
  this.tail = this.list[value];
  if (this.head === null) {
    this.head = this.list[value];
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

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};