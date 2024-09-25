// binary search
// searches for a target value in a SORTED array
// returns index of target value
// returns -1 if not found
// returns -1 if array is empty
// BigO = O(logn)

const binarySearch = (arr, target) => {
  if (!arr) {
    return -1;
  }
  arr = arr.sort();
  let firstIndex = arr[0];
  let lastIndex = arr.length - 1;

  while (firstIndex <= lastIndex) {
    let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

    if (target === arr[middleIndex]) {
      return middleIndex;
    }

    if (target < arr[middleIndex]) {
      lastIndex = middleIndex - 1;
    } else {
      firstIndex = middleIndex + 1;
    }
  }

  return -1;
};

console.log("Binary search an empty array:", binarySearch([], 7));
console.log(
  "Binary search an ordered array: ",
  binarySearch([1, 2, 3, 4, 5], 3)
);
console.log(
  "Binary search an ordered array: ",
  binarySearch([1, 2, 3, 4, 5], 2)
);
console.log(
  "Binary search an ordered array: ",
  binarySearch([1, 2, 3, 4, 5], 4)
);
console.log(
  "Binary search an unordered array: ",
  binarySearch([1, 7, 9, 3, 2, 6, 8], 3)
);
console.log(
  "Binary search an ordered array with no taret: ",
  binarySearch([1, 2, 3, 4, 5], 7)
);
