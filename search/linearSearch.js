// linear search
// returns index of target value
// returns -1 if target value not found
// BigO = O(n)

const linearSearch = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }

  return -1;
};

const arr = [1, 4, 5, 7, 8, 9];
const target1 = 5;
const target2 = 6;

console.log(`Index of ${target1} in ${arr}: ${linearSearch(arr, target1)}`);
console.log(`Index of ${target2} in ${arr}: ${linearSearch(arr, target2)}`);
