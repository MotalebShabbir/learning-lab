class Stack {
    constructor() {
        this.array = [];
    }
    push(value) {
        this.array.push(value);
    }
    pop() {
      if(this.isEmpty()){
        console.log('no stack')
        return
      }
        return this.array.pop();
    }
    peek() {
        if (this.isEmpty()) {
            console.log("Stack empty");
            return;
        }
        return this.array[this.size() - 1];
    }
    isEmpty() {
        return this.array.length === 0;
    }
    size() {
        return this.array.length;
    }
}
const history = new Stack();
history.push("google");
history.push("facebook");
history.push("twitter");
history.pop();
console.log(history.peek());
console.log("size: " + history.size());
