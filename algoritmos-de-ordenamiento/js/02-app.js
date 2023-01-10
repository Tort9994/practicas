//Quick sort

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
sort(smArr); // 0 Milliseconds
sort(bigArr); // 1 Millisecond
