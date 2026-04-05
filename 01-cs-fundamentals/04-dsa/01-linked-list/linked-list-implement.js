class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertAtFront(value) {
        let newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head;
        this.head = newNode;
        this.head.next = current;
        this.size++;
    }
    insertAtTail(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.size++;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            current = current.next;
        }
        current.next = newNode;
        this.size++;
    }
    deleteElement(value) {
        if (this.head === null) return;
        if (this.head.value === value) {
            this.head = this.head.next;
            console.log(11111);
            this.size--;
            return;
        }
        let current = this.head;
        while (current.next !== null) {
            if (current.next.value === value) {
                current.next = current.next.next;
                this.size--;
                return;
            }
            current = current.next;
        }
        console.log(value + " not found");
    }
    print() {
        const arr = [];
        let current = this.head;
        while (current !== null) {
            arr.push(current.value);
            current = current.next;
        }
        return arr;
    }
}

const list = new LinkedList();
list.insertAtFront(50);
list.insertAtFront(40);
list.insertAtFront(30);
list.insertAtFront(20);
list.insertAtTail(60);
list.insertAtTail(70);
list.insertAtTail(80);
list.deleteElement(50);
console.log(list.size);
console.log(list.print());
