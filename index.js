const LinkedList = require('./linkedList');
const linkedList = new LinkedList().fromValues(-10, 0, 10, 20, 30, 40, 60, 70, 80, 90, 100);

linkedList.removeAtIndex(1);
linkedList.removeHead();
linkedList.insertAtIndex(4, 50);

linkedList.prettyPrint();
console.log(linkedList.getByIndex(4).value);
