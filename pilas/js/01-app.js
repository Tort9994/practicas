import { Stack } from "./clases.js";

const pila = new Stack();

pila.push("Alfred");
pila.push("palabra");
pila.push("Dario");
pila.push("gabriel");
pila.push("Lobo");
console.log(pila.print());
console.log(pila.getSize());
