//Notacion exponencial O(2^n)

var fib = function (n) {
  if (n <= 1) return n;
  const array = [0, 1];
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
};

console.log(fib(10));
