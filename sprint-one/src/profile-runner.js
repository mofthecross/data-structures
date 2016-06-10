  var funcStackArr = [];
  var funcQueueArr = [];
  // var funcShareStackArr = [];
  // var funcShareQueueArr = [];
  // var prototypalStackArr = [];
  // var prototypalQueueArr = [];
  // var pseudoclassicStackArr = [];
  // var pseudoclassicQueueArr = [];

$(document).ready(function() {

  var stackAndQueueSizes = 500000;

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
functional pattern:
functional shared pattern:
prototypal pattern:
pseudoclassical pattern:

*/