class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class doublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    elements() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
    elementsReverse() {
        const arr = [];
        let current = this.tail;
        while (current !== null) {
            arr.push(current.value);
            current = current.prev;
        }
        return arr;
    }
    insertHead(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            this.head = newNode;
            this.head.next = current;
            current.prev = this.head;
        }
        this.size++;
    }
    insertTail(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }
    deleteElement(value) {
        if (this.head === null) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            if (this.head === null) this.tail = null;
            else this.head.prev = null;
            this.size--;
            return;
        }
        if (this.tail.value === value) {
            this.tail = this.tail.prev;
            if (this.tail === null) this.head = null;
            else this.tail.next = null;
            this.size--;
            return;
        }
        let toTail = this.head;
        let toHead = this.tail;
        while (toTail.next !== null && toHead.prev !== null) {
            if (toTail.next.value === value) {
                toTail.next = toTail.next.next;
                toTail.next.prev = toTail;
                this.size--;
                return;
            }
            if (toHead.prev.value === value) {
                toHead.prev = toHead.prev.prev;
                toHead.prev.next = toHead;
                this.size--;
                return;
            }
            toTail = toTail.next;
            toHead = toHead.prev;
        }
        console.log(value + " is not found");
    }
}

const list = new doublyLinkedList();
list.insertHead(50);
list.insertHead(40);
list.insertHead(30);
list.insertTail(60);
list.insertTail(70);
list.insertTail(80);
list.deleteElement(60);
console.log(list.elements());
console.log(list.elementsReverse());
console.log("size: " + list.size);
