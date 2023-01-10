//Notacion factorial O(n!)

console.time("loop");

const factorial = (n) => {
  let num = n;

  if (n === 0) return 1;
  for (let i = 0; i < n; i++) {
    num = n * factorial(n - 1);
  }

  return num;
};

setTimeout(() => {
  console.log(factorial(13));
  onsole.timeEnd("loop");
}, 10000);
