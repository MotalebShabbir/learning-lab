class CircularQueue {
  constructor(capacity) {
    this.queue = Array(capacity);
    this.capacity = capacity;
    this.front = 0;
    this.rear = 0;
    this.size = 0;
  }
  isEmpty() {
    return this.size === 0;
  }
  isFull() {
    return this.size === this.capacity;
  }
  enqueue(value) {
    if (this.isFull()) {
      console.log("Queue is full");
      return;
    }
    this.queue[this.rear] = value;
    this.rear = (this.rear + 1) % this.capacity;
    this.size++;
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return;
    }
    const value = this.queue[this.front];
    this.queue[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.size--;
    return value;
  }
}
const cq = new CircularQueue(4);
cq.enqueue(10);
cq.enqueue(20);
cq.enqueue(30);
cq.enqueue(40);
cq.enqueue(50);
cq.dequeue();
cq.enqueue(50);
console.log(cq.size);
