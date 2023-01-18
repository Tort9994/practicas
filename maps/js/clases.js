class MyMap {
  constructor() {
    this.map = {};
  }

  set(key, value) {
    this.map[key] = value;
  }

  get(key) {
    return this.map[key];
  }

  has(key) {
    return key in this.map;
  }

  delete(key) {
    delete this.map[key];
  }

  clear() {
    this.map = {};
  }

  get size() {
    return Object.keys(this.map).length;
  }
}
