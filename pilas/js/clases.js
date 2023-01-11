export class Stack {
  constructor() {
    this.items = {};
    this.top = 0;
  }
  //O(1)
  push(data) {
    this.top++;
    this.items[this.top] = data;
  }

  //O(1)

  pop() {
    let deletedData;

    if (this.top) {
      deletedData = this.items[this.top];
      delete this.items[this.top];
      this.top--;
      return deletedData;
    }
  }

  //O(1)
  getSize() {
    return this.top;
  }

  //O(1)
  isEmpty() {
    if (!this.getSize()) {
      return true;
    } else {
      return false;
    }
  }

  //O(1)
  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.top];
  }

  //O(n)
  print() {
    let result = "";
    for (let i = 0; i < this.top; i++) {
      result += this.items[i] + " ";
    }
    return result;
  }
}
