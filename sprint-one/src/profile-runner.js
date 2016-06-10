$(document).ready(function() {

  var funcStack = FunctionalStack();
  var funcQueue = FunctionalQueue();
  var funcShareStack = FunctionalSharedStack();
  var funcShareQueue = FunctionalSharedQueue();
  var prototypalStack = PrototypalStack();
  var prototypalQueue = PrototypalQueue();
  var pseudoclassicStack = new PseudoClassicalStack();
  var pseudoclassicQueue = new PseudoClassicalQueue();

  var stackAndQueueSizes = 1000;

  for (var i = 0; i <= stackAndQueueSizes; i++) {
    funcStack.push(i);
    funcQueue.enqeue(i);
    funcShareStack.push(i);
    funcShareQueue.enqeue(i);
    prototypalStack.push(i);
    prototypalQueue.enqeue(i);
    pseudoclassicStack.push(i);
    pseudoclassicQueue.enqeue(i);
  }
});