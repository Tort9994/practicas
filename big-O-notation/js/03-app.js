//Notacion Logaritmica O(n)

let arr = [3, 1, 2, 4];

const sort = (arr) => {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let left = [];
  let right = [];

  for (let i = 1, total = arr.length; i < total; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }
  return [...sort(left), pivot, ...sort(right)];
};

console.log(sort(arr));
