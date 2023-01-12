const cliente = new Map();
//O(1)
cliente.set("nombre", "Karen");
cliente.set("tipo", "Premium");
cliente.set("saldo", 3000);

console.log(cliente);

console.log(cliente.size);
//O(1)
console.log(cliente.has("nombre2"));
//O(1)
console.log(cliente.get("nombre"));
//O(1)
cliente.delete("saldo");
//O(1)
cliente.clear();

const paciente = new Map([
  ["nombre", "paciente"],
  ["cuarto", "no definido"],
]);

console.log(paciente);

//O(n)
paciente.forEach((datos) => {
  console.log(datos);
});
