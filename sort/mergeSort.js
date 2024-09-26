// Merge Sort
// Divide given array repeatedly at midpoint until individual arrays are of length 1
// create temp array
// compare adjacent arrays of length 1 and push the smaller one to temp (ascending order sorting)
// repeat comparison until done

// BigO = O(nlogn) - recursive division and while loop

const mergeArrs = (leftArr, rightArr) => {
  const tempArr = [];

  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      tempArr.push(leftArr.shift());
    } else {
      tempArr.push(rightArr.shift());
    }
  }

  return [...tempArr, ...leftArr, ...rightArr];
};

const mergeSort = (arr) => {
  if (!arr || arr.length < 2) {
    return arr;
  }

  const midpoint = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, midpoint);
  const rightArr = arr.slice(midpoint);

  return mergeArrs(leftArr, rightArr);
};

const arr1 = [-8, 20, 4, 7, 2];
console.log(mergeSort(arr1));
