// Merge Sort

array = [9, 6, 2, 4, 1];

function merge(array) {
  let mitad = Math.floor(array.length / 2);

  let left = array.slice(0, mitad);
  let right = array.slice(mitad);
  let sortedArr = []; // the sorted items will go here

  while (left.length && right.length) {
    // Insert the smallest item into sortedArr
    if (left[0] < right[0]) {
      sortedArr.push(left.shift());
    } else {
      sortedArr.push(right.shift());
    }
  }
  // Use spread operators to create a new array, combining the three arrays
  return [...sortedArr, ...left, ...right];
}
console.log(merge(array)); // [1, 2, 4, 6, 9]
