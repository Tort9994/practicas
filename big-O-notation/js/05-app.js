//Notacion cuadratica O(n^2)

function multiplyAll(arr1, arr2) {
  if (arr1.length !== arr2.length) return undefined;
  let total = 0;
  for (let i of arr1) {
    for (let j of arr2) {
      total += i * j;
    }
  }
  return total;
}
let result1 = multiplyAll([1, 2], [5, 6]); // 33
