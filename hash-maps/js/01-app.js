import { HashMap } from "./clases.js";

const hm = new HashMap();

console.log(hm.set(1, "Canada")); // [ 'Canada', 300 ]
console.log(hm.set(2, "France")); // [ 'France', 100 ]
console.log(hm.set(3, "Spain")); // [ 'Spain', 110 ]
console.log(hm.hash(3)); // [ 'Spain', 110 ]
