describe('doubleLinkedList', function() {
  var doubleLinkedList;

  beforeEach(function() {
    doubleLinkedList = new DoubleLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doubleLinkedList).to.have.property('head');
    expect(doubleLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeTail", "addToHead", "removeHead", "listForwards", "listBackwards", and "contains"', function() {
    expect(doubleLinkedList.addToTail).to.be.a('function');
    expect(doubleLinkedList.removeTail).to.be.a('function');
    expect(doubleLinkedList.addToHead).to.be.a('function');
    expect(doubleLinkedList.removeHead).to.be.a('function');
    expect(doubleLinkedList.listForwards).to.be.a('function');
    expect(doubleLinkedList.listBackwards).to.be.a('function');
    expect(doubleLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.tail.value).to.equal(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.tail.value).to.equal(5);
  });

  it('should remove the tail form the list when removeTail is called', function() {
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(7);
    expect(doubleLinkedList.removeTail()).to.equal(7);
  });

  it('should designate a new head when new nodes are added', function() {
    doubleLinkedList.addToHead(8);
    expect(doubleLinkedList.head.value).to.equal(8);
    doubleLinkedList.addToHead('hack');
    expect(doubleLinkedList.head.value).to.equal('hack');
  });

  it('should remove the head from the list when removeHead is called', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.head.value).to.equal(4);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doubleLinkedList.addToTail(4);
    expect(doubleLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    expect(doubleLinkedList.contains(4)).to.equal(true);
    expect(doubleLinkedList.contains(5)).to.equal(true);
    expect(doubleLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doubleLinkedList.addToTail(4);
    doubleLinkedList.addToTail(5);
    doubleLinkedList.removeHead();
    expect(doubleLinkedList.contains(4)).to.equal(false);
  });

  it('should list it\'s contents forwards.', function() {
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    doubleLinkedList.addToTail(3);
    expect(doubleLinkedList.listForwards()).to.equal([5, 6, 3]);
  });

  it('should list it\'s contents backwards.', function() {
    doubleLinkedList.addToTail(5);
    doubleLinkedList.addToTail(6);
    doubleLinkedList.addToTail(3);
    expect(doubleLinkedList.listBackwards()).to.equal([3, 6, 5]);
  });

  // add more tests here to test the functionality of doubleLinkedList
});
