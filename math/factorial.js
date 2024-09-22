// solve the factorial of a number
// factorial of a positive number is the product of all
// numbers less or equal to that number
// factorial of 0 is 1

// Big-O = O(n) - Linear

const factorial = (n) => {
  if (n <= 0) {
    return 0;
  }
  let num = n;
  for (let i = n - 1; i > 0; i--) {
    num = num * i;
  }

  return num;
};

console.log(`Factorial of 5 is: ${factorial(5)}`);
console.log(`Factorial of 6 is: ${factorial(6)}`);
console.log(`Factorial of 7 is: ${factorial(7)}`);
