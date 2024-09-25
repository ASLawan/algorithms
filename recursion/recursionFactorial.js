// using recursion to solve factorial problem
// base condition factorial of 0 is 1
// BigO = O(n)

const factorial = (n) => {
  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

console.log("Factorial of 5 is:", factorial(5));
