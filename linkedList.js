class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertAtHead(data) {
        const newNode = new LinkedListNode(data, this.head);

        this.head = newNode;
        this.length++;
    }

    getByIndex(index) {
        if(index < 0 || index >= this.length) return null;

        let currentNode = this.head;
        for(let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    insertAtIndex(index, value) {
        if(index === 0) return this.insertAtHead(value);

        const previousNode = this.getByIndex(index - 1);
        if(!previousNode?.next) return null;

        previousNode.next = new LinkedListNode(value, previousNode.next);
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }

    removeAtIndex(index) {
        if(index === 0) return this.removeHead();

        const previousNode = this.getByIndex(index - 1);
        if(!previousNode?.next) return null;

        previousNode.next = previousNode.next.next;
        this.length--;
    }

    // HELPER FUNCTIONS
    fromValues(...values) {
        const linkedList = new LinkedList();

        for(let i = values.length - 1; i >= 0; i--) {
            linkedList.insertAtHead(values[i]);
        }

        return linkedList;
    }

    prettyPrint() {
        let output = '';
        let currentNode = this.head;

        while(currentNode) {
            output = `${ output }${ currentNode.value } -> `;
            currentNode = currentNode.next;
        }

        return console.log(`${ output }null`);
    }
}

class LinkedListNode {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

module.exports = LinkedList;
