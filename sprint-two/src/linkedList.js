var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    list[value] = Node(value);
    if (list.tail !== null) {
      list.tail.next = list[value];
    }
    list.tail = list[value];
    if (list.head === null) {
      list.head = list.tail;
    }
  };

  list.removeHead = function() {
    var temp = list.head.value;
    if (list.head === list.tail) {
      list.tail = null;
    }
    list.head = list.head.next;
    delete list[temp];
    return temp; 
  };

  list.contains = function(target) {
    var currNode = list.head; 
    for (; currNode !== null; currNode = currNode.next) {
      if (currNode.value === target) {
        return true; 
      } 
    }
    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail: O(1)
 removeHead: O(1)
 contains: O(n)
 */
