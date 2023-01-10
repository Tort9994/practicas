//objeto de nodo o bagon

class Nodo {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// objeto de tren donde se guardan los datos o lista

export class Lista {
  constructor() {
    this.head = null;
    this.length = 0;
    this.tail = null;
  }

  //O(1)
  add(value) {
    this.length++;
    let newNode = new Nodo(value);

    if (this.tail) {
      // list is not empty
      this.tail.next = newNode;

      this.tail = newNode;
      return newNode;
    }

    this.head = this.tail = newNode;
    return newNode;
  }

  //O(n)
  print() {
    let current = this.head;
    while (current) {
      console.log(
        `${current.previous?.value} ${current.value} ${current.next?.value}`
      );
      current = current.next;
    }
  }

  //O(n)
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

  //O(n)
  set(value, newValue) {
    if (this.head.value === value) {
      this.head.value = newValue;
    } else {
      let refe = this.head;
      while (refe.next !== null) {
        if (refe.next.value === value) {
          refe.next.value = newValue;
        } else {
          refe = refe.next;
        }
      }
    }
  }

  //O(1)

  remove() {
    if (this.tail) {
      this.tail = null;
    }
  }

  //O(n)

  size() {
    let length = 0;
    let refe = this.head;
    while (refe !== null) {
      length++;
      refe = refe.next;
    }
    return console.log(length);
  }

  //O(n)
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

  //O(1)

  getFirst() {
    return console.log(this.head);
  }

  //O(1) mal
  getLast() {
    return console.log(this.tail);
  }

  //O(1)
  clear() {
    if (this.head) {
      this.head = null;
    }
  }

  //O(n)

  toArray() {
    let array = [];
    let refe = this.head;
    while (refe !== null) {
      array.push(refe.value);
      refe = refe.next;
    }
    return console.log(array);
  }

  //O(n)
  index0f(value) {
    let length = 0;
    let refe = this.head;
    while (refe.next !== null) {
      length++;
      if (refe.value === value) {
        console.log(length);
      }
      refe = refe.next;
    }
  }
}
