// Insertion sort splits an array into a sorted and unsorted part
// Assume the first element is already sorted and the rest unsorted
// select an unsorted element and compare with the sorted part
// if the elements in the sorted part is smaller than selected element
// proceed to the next element in unsorted part
// if the selected element is bigger, insert in the right position and shift
// the sorted elements accordingly
// repeat the process till done

// BigO = O(n^2) - Quadratic time complexity

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];

    let j = i - 1;

    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = numberToInsert;
  }
};

const arr1 = [-8, 20, 4, 7, 2];
insertionSort(arr1);

console.log(arr1);
