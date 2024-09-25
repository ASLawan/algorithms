// Bubble sort algorithm
// involves looping through and comparing adjacent two elements of an array
// if the two elements are not in order, they are swapped
// if the two elements are in order, they are left as is
// when all the alements are in order, the array is sorted

// BigO = O(n^2) - Quadratic time complexity

const bubbleSort = (arr) => {
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};

const arr1 = [-8, 20, 4, 7, 2];
bubbleSort(arr1);

console.log(arr1);
