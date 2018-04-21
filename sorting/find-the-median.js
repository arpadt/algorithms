const arr = [11, 5, 9, 2, 4, 7, 8, 1, 3];

const medianPosition = Math.floor(arr.length / 2) + 1;

function findTheMedian(arr, med) {
  // need: median position (k: k-th smallest number wanted), pivot for sorting
  // make partitions
  // if length of left + length of equal === k --> it will be the pivot (must be in equal) DONE
  // if length of left + length of equal > k --> it will be
    // either in the left (if length of left >= k), repeat with left and same k
    // or in equal --> pivot DONE
  // otherwise it must be in the right, decrease k by length of left + length of equal and repeat
  // with right and new k
  // continue until we get one element on the array
  if (arr.length === 1) return arr[0];

  let k = med;

  const pivot = arr[0];
  const left = [];
  const right = [];
  const equal = [pivot];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  const leftLength = left.length;
  const equalLength = equal.length;

  if (leftLength + equalLength === k) {
    return pivot;
  } else if (leftLength + equalLength > k) {
    if (leftLength < k) return pivot;
    return findTheMedian(left, k);
  } else {
    k = k - (leftLength + equalLength);
    return findTheMedian(right, k);
  }

}

console.log(findTheMedian(arr, medianPosition));



