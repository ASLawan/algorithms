// is power of two verifies if a number can be a expressed as a power of two
// BigO = O(logn)

// const isPowerOfTwo = (n) => {
//   if (n < 1) {
//     return false;
//   }

//   while (n > 1) {
//     if (n % 2 !== 0) {
//       return false;
//     }

//     n = n / 2;
//   }

//   return true;
// };

//optimized solution
// BigO = O(1) - constant

const isPowerOfTwoBitWise = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

console.log("8 can expressed as a power of 2:", isPowerOfTwoBitWise(8));
console.log("5 can expressed as a power of 2:", isPowerOfTwoBitWise(5));
console.log("32 can expressed as a power of 2:", isPowerOfTwoBitWise(32));
