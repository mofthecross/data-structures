var DoubleLinkedList = function() {
  this.list = {};
  this.head = null;
  this.tail = null;
};

DoubleLinkedList.prototype.addToHead = function(value) {
  this.list[value] = new Node(value);
  if (this.head !== null) {
    this.list[value].next = this.head;
    this.head.prev = this.list[value];  
  }
  this.head = this.list[value];
  if (this.tail === null) {
    this.tail = this.list[value];
  }
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
  //reference the original 'head' of the list
  var temp = this.head.value;
  //make sure there is a head
  if (this.head !== null) {
    //if so, check if the list has more than 1 item
    if (this.head.next !== null) {
      //if so, set the next item as the head
      this.head = this.head.next;
    }
  }
  //output the original 'head' of the list
  return temp;
}; 

DoubleLinkedList.prototype.removeTail = function() {
  var temp = this.tail.value;
  this.tail.prev.next = null;
  this.tail = this.tail.prev;
  delete this.list[temp];
  return temp;
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