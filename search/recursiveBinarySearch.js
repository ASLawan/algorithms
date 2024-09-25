// recursive binary search
// searches for a target value in a SORTED array
// returns index of target value
// returns -1 if not found
// returns -1 if array is empty
// BigO = O(logn)

const search = (arr, target, firstIndex, lastIndex) => {
  if (!arr || firstIndex > lastIndex) {
    return -1;
  }

  let middleIndex = Math.floor((firstIndex + lastIndex) / 2);

  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target < lastIndex) {
    return search(arr, target, firstIndex, middleIndex - 1);
  } else {
    return search(arr, target, middleIndex + 1, lastIndex);
  }
};

const recursiiveBinarySearch = (arr, target) => {
  arr = arr.sort();
  return search(arr, target, 0, arr.length - 1);
};

console.log("Binary search an empty array:", recursiiveBinarySearch([], 7));
console.log(
  "Binary search an ordered array: ",
  recursiiveBinarySearch([1, 2, 3, 4, 5], 3)
);
console.log(
  "Binary search an ordered array: ",
  recursiiveBinarySearch([1, 2, 3, 4, 5], 2)
);
console.log(
  "Binary search an ordered array: ",
  recursiiveBinarySearch([1, 2, 3, 4, 5], 4)
);
console.log(
  "Binary search an unordered array: ",
  recursiiveBinarySearch([1, 7, 9, 3, 2, 6, 8], 3)
);
console.log(
  "Binary search an ordered array with no target: ",
  recursiiveBinarySearch([1, 2, 3, 4, 5], 7)
);
