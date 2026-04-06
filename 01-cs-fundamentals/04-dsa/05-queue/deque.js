class Deque {
  constructor() {
    this.deque = [];
  }
  size() {
    return this.deque.length;
  }
  isEmpty() {
    return this.deque.length === 0;
  }
  addFront(value) {
    return this.deque.unshift(value);
  }
  addBack(value) {
    return this.deque.push(value);
  }
  peekFront() {
    if (this.isEmpty()) {
      console.loge("Deque is empty");
      return;
    }
    return this.deque[0];
  }
  peekBack() {
    if (this.isEmpty()) {
      console.loge("Deque is empty");
      return;
    }
    return this.deque[this.size() - 1];
  }
  removeFront() {
    if (this.isEmpty()) {
      console.loge("Deque is empty");
      return;
    }
    return this.deque.shift();
  }
  removeBack() {
    if (this.isEmpty()) {
      console.loge("Deque is empty");
      return;
    }
    return this.deque.pop();
  }
}
const dq = new Deque();
dq.addBack(10);
dq.addBack(20);
dq.addFront(5);
dq.addFront(1);

console.log(dq.peekFront());
console.log(dq.peekBack());
dq.removeFront();
dq.removeBack();
console.log(dq.size());
