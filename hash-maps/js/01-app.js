var hashmap = new Map();

hashmap.set("1", 700);
hashmap.set("2", [1, 2, 3]);
hashmap.set("3", "This is a string");
hashmap.set("4", () => {
  console.log("Hello World");
});

console.log(hashmap);

console.log(hashmap);

console.log(hashmap.size);
//O(1)
console.log(hashmap.has("nombre2"));
//O(1)
console.log(hashmap.get("nombre"));
//O(1)
hashmap.delete("saldo");
//O(n)
hashmap.forEach((element) => {
  document.write("<br>" + element);
});
