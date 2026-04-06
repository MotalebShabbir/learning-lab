class Queue {
  constructor() {
    this.queue = [];
  }
  size() {
    return this.queue.length;
  }
  isEmpty() {
    return this.queue.length === 0;
  }
  enqueue(value) {
    this.queue.push(value);
  }
  dequeue() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue.shift();
  }
  front() {
    if (this.isEmpty()) {
      console.log("Queue is empty");
      return null;
    }
    return this.queue[0];
  }
}

const newQueue = new Queue();
newQueue.enqueue(10);
newQueue.enqueue(20);
console.log(newQueue.dequeue());
console.log(newQueue.front());
console.log(newQueue.size());
console.log(newQueue.isEmpty());
