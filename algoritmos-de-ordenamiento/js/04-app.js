//Insertion Sort
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    debugger;
    let currentValue = arr[i];
    let j;
    for (j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = currentValue;
  }
  return arr;
}
console.log(insertionSort([2, 8, 5, 3, 9, 4])); // [1, 2, 3, 5, 7]
