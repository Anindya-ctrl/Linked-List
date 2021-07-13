const LinkedList = require('./linkedList');

describe('#insertAtHead', () => {
    test('inserts a node in the beginning', () => {
        const linkedList = new LinkedList();

        linkedList.insertAtHead(10);
        const oldHead = linkedList.head;
        linkedList.insertAtHead(20);

        expect(linkedList.head.value).toBe(20);
        expect(linkedList.head.next).toBe(oldHead);
        expect(linkedList.length).toBe(2);
    });
});

describe('#getByIndex', () => {
    describe('with < 0 index', () => {
        test('returns null', () => {
            const linkedList = new LinkedList().fromValues(10, 20);

            expect(linkedList.getByIndex(-1)).toBeNull();
        });
    });
    describe('with 0 index', () => {
        test('returns head', () => {
            const linkedList = new LinkedList().fromValues(10, 20);

            expect(linkedList.getByIndex(0).value).toBe(10);
        });
    });
    describe('with > last index', () => {
        test('returns null', () => {
            const linkedList = new LinkedList().fromValues(10, 20);

            expect(linkedList.getByIndex(3)).toBeNull();
        });
    });
    describe('with index somewhere in the middle', () => {
        test('returns the element at that index', () => {
            const linkedList = new LinkedList().fromValues(10, 20, 30, 40);

            expect(linkedList.getByIndex(2).value).toBe(30);
        });
    });
});

describe('#insertAtIndex', () => {
    describe('with < 0 index', () => {
        test('inserts nothing', () => {
            const linkedList = new LinkedList().fromValues(10, 20);
            linkedList.insertAtIndex(-1, 30);

            expect(linkedList.length).toBe(2);
        });
    });
    describe('with 0 index', () => {
        test('inserts at head', () => {
            const linkedList = new LinkedList().fromValues(20, 10);
            linkedList.insertAtIndex(0, 30);

            expect(linkedList.head.value).toBe(30);
            expect(linkedList.head.next.value).toBe(20);
            expect(linkedList.length).toBe(3);
        });
    });
    describe('with > last index', () => {
        test('inserts nothing', () => {
            const linkedList = new LinkedList().fromValues(10, 20);
            linkedList.insertAtIndex(3, 30);

            expect(linkedList.length).toBe(2);
        });
    });
    describe('with index somewhere in the middle', () => {
        test('inserts at given index', () => {
            const linkedList = new LinkedList().fromValues(10, 30, 40, 50);
            linkedList.insertAtIndex(1, 20);

            expect(linkedList.head.value).toBe(10);
            expect(linkedList.head.next.value).toBe(20);
            expect(linkedList.length).toBe(5);
        });
    });
});

describe('#removeHead', () => {
    test('removes the last node', () => {
        const linkedList = new LinkedList().fromValues(10, 20, 30, 40);
        linkedList.removeHead();

        expect(linkedList.head.value).toBe(20);
        expect(linkedList.length).toBe(3);
    });
});

describe('#removeAtIndex', () => {
    describe('with < 0 index', () => {
        test('removes nothing', () => {
            const linkedList = new LinkedList().fromValues(10, 20);
            linkedList.removeAtIndex(-1);

            expect(linkedList.length).toBe(2);
        });
    });
    describe('with 0 index', () => {
        test('removes the head', () => {
            const linkedList = new LinkedList().fromValues(20, 10, 0);
            linkedList.removeAtIndex(0);

            expect(linkedList.head.value).toBe(10);
            expect(linkedList.head.next.value).toBe(0);
            expect(linkedList.length).toBe(2);
        });
    });
    describe('with > last index', () => {
        test('removes nothing', () => {
            const linkedList = new LinkedList().fromValues(10, 20);
            linkedList.removeAtIndex(3);

            expect(linkedList.length).toBe(2);
        });
    });
    describe('with index somewhere in the middle', () => {
        test('removes at given index', () => {
            const linkedList = new LinkedList().fromValues(10, 20, 0, 30);
            linkedList.removeAtIndex(2);

            expect(linkedList.head.value).toBe(10);
            expect(linkedList.head.next.next.value).toBe(30);
            expect(linkedList.length).toBe(3);
        });
    });
});
