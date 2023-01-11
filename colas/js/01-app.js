import { Queue } from "./clases.js";

const cola = new Queue();

cola.enqueue("Alfred");
cola.enqueue("palabra");
cola.enqueue("Dario");
cola.enqueue("gabriel");
cola.enqueue("Lobo");
console.log(cola.print());
console.log(cola.getSize());
