  var funcStackArr = [];
  var funcQueueArr = [];
  // var funcShareStackArr = [];
  // var funcShareQueueArr = [];
  // var prototypalStackArr = [];
  // var prototypalQueueArr = [];
  // var pseudoclassicStackArr = [];
  // var pseudoclassicQueueArr = [];

$(document).ready(function() {

  var stackAndQueueSizes = 100000;

  for (var i = 0; i <= stackAndQueueSizes; i++) {
    funcStackArr.push(FunctionalStack());
    funcQueueArr.push(FunctionalQueue());
    // funcShareStackArr.push(FunctionalSharedStack());
    // funcShareQueueArr.push(FunctionalSharedQueue());
    // prototypalStackArr.push(PrototypalStack());
    // prototypalQueueArr.push(PrototypalQueue());
    // pseudoclassicStackArr.push(new PseudoClassicalStack());
    // pseudoclassicQueueArr.push(new PseudoClassicalQueue());

    if (i === stackAndQueueSizes) {
      $('.frame').text('We\'re done!');

    }
  }
});

/*
Test Quantity 100,000 instantiations each.

functional pattern:
  stack time: 107.0 ms
  queue time: 113.0 ms
  stack heap:  41.7 MB
  queue heap:  40.1 MB
  total heap:  84.3 MB, 97% of total heap
  
functional shared pattern:
  stack time:  ms
  queue time:  ms

prototypal pattern:
  stack time:  ms
  queue time:  ms

pseudoclassical pattern:
  stack time:  ms
  queue time:  ms

*/