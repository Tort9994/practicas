function createNode(value) {
  return {
    value: value,
    next: null,
    previous: null,
  };
}
export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  add(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  addFirst(value) {
    this.length++;
    let newNode = createNode(value);

    if (this.head) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  addIndex(value, index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    if (index === 0) {
      return this.insertHead(value);
    }

    this.length++;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const previousNode = currentNode.previous;
    const newNode = createNode(value);
    newNode.next = currentNode;
    newNode.previous = previousNode;
    previousNode.next = newNode;
    currentNode.previous = newNode;
    return newNode;
  }

  remove() {
    if (this.tail) {
      this.length--;

      const removedTail = this.tail;

      this.tail = this.tail.previous;
      if (this.tail) {
        this.tail.next = null;
      } else {
        this.head = null;
      }

      return console.log(removedTail);
    }
    return undefined;
  }

  removeFirst() {
    if (this.head) {
      this.length--;
      const removedHead = this.head;
      this.head = this.head.next;

      if (this.head) {
        this.head.previous = null;
      } else {
        this.tail = null;
      }

      return removedHead;
    }
    return undefined;
  }

  removeIndex(index) {
    if (index >= this.length) {
      throw new Error("Remove index out of bounds");
    }

    if (index === 0) {
      return this.removeHead();
    }

    this.length--;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }
    const previousNode = currentNode.previous;
    const nextNode = currentNode.next;
    previousNode.next = nextNode;
    nextNode.previous = previousNode;
    return currentNode;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.previous?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }

  size() {
    let length = 0;
    let refe = this.head;
    while (refe !== null) {
      length++;
      refe = refe.next;
    }
    return console.log(length);
  }

  get(index) {
    if (index >= this.length) {
      throw new Error("Insert index out of bounds");
    }

    this.length++;
    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return console.log(currentNode);
  }

  getFirst() {
    return console.log(this.head);
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return console.log(lastNode);
  }

  contains(value) {
    if (this.head.value === value) {
      return true;
    } else {
      let refe = this.head;
      while (refe.next !== null) {
        if (refe.next.value === value) {
          return true;
        }
        refe = refe.next;
      }
    }
    return false;
  }

  clear() {
    if (this.head) {
      this.head = null;
    }
  }

  toArray() {
    let array = [];
    let refe = this.head;
    while (refe !== null) {
      array.push(refe.value);
      refe = refe.next;
    }
    return console.log(array);
  }
}
