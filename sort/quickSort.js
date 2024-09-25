// Pick a pivot element
// put every element smaller than pivot to a left array and
// every element bigger than pivot to a right array
// repeat the process for both arrays till you have a sorted array - length of 1
// repeatedly concatenate left array, pivote and right array to have a sorted array

// this method makes use of recursion
// do not forget the base condition

const quickSort = (arr) => {
  // base condition
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }

  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
};

const arr1 = [-8, 20, 4, 7, 2];
console.log(quickSort(arr1));
