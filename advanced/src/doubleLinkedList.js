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
  var currNode;
  //look over the list
  if (this.head !== null && this.tail !== null) {
    //compare each value to the target
    if (this.head.value === target) {
      return true;
    } else if (this.head.next !== null) {
      currNode = this.head.next;
      for (;currNode !== null; currNode = currNode.next) {
        if (currNode.value === target) {
          return true;
        }
      }
    }
  }
  return false;
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
  //look at the 'head' and store it as 'currNode'
  var currNode = this.head;
  //store the ouput named 'results'
  var results = [];
  //if the 'currNode' of the list exists
  for (; currNode !== null; currNode = currNode.next) {
    //store the 'currNode's value in 'results'
    results.push(currNode.value);
    //repeat this process until 'currNode' reaches the end
  }
  //return the 'results'
  return results;
};

DoubleLinkedList.prototype.listBackwards = function() {
  // body...
};

var Node = function(value) {
  this.value = value;
  this.next = null;
  this.prev = null;
};