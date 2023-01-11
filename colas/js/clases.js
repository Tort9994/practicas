export class Queue {
  constructor() {
    this.items = {};
    this.front = 0;
    this.end = 0;
  }
  //O(1)
  enqueue(data) {
    this.items[this.end] = data;
    this.end++;
  }

  //O(1)

  dequeue() {
    if (this.front === this.end) {
      return null;
    }
    const data = this.items[this.front];
    this.front++;
    return data;
  }

  //O(1)
  getSize() {
    return this.end - this.front;
  }
  //O(1)
  isEmpty() {
    if (this.getSize() === 0) {
      return true;
    } else {
      return false;
    }
  }

  //O(1)
  peek() {
    if (this.getSize === 0) {
      return null;
    }
    return this.items[this.front];
  }

  //O(n)
  print() {
    if (this.getSize === 0) {
      return null;
    }
    let result = "";
    for (let i = 0; i < this.end; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}
