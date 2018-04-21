const arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
const length = arr.length;

let low = 0;
let high = length - 1;

function binarySearch(arr, element, low, high) {
  if (high < low) return 'The value cannot be found in the array';

  const mid = Math.floor((low + high) / 2);

  if (element === arr[mid]) {
    return mid;
  } else if (element < arr[mid]) {
    // in left half
    high = mid - 1;
    return binarySearch(arr, element, low, high);
  } else {
    // in the right half
    low = mid + 1;
    return binarySearch(arr, element, low, high);
  }
}

console.log(binarySearch(arr, 67, low, high));

function binarySearchWithIteration(arr, element, low, high) {
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (element === arr[mid]) {
      return mid;
    } else if (element < arr[mid]) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return 'The value cannot be found in the array';
}

console.log(binarySearchWithIteration(arr, 67, low, high));
