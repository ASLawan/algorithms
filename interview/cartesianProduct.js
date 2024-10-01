// Cartesian product involves building an array of arrays from
// two individual arrays
// loop through and combine array elements from each array to create a new array of arrays
// each array element from first array combines with every array element from second array
// repeat the process for every element in first array

// BigO = O(m x n) = it is a function of the lengths of each array

const cartesianProduct = (arr1, arr2) => {
  let newArr = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push([arr1[i], arr2[j]]);
    }
  }

  return newArr;
};

let arr1 = [1, 2];
let arr2 = [3, 4];

console.log(cartesianProduct(arr1, arr2));
