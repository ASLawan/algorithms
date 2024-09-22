// Solve fibonacci series for first n-elements
// first two elements of the series: 0 and 1
// subsequent elements gotten by adding previous two elements

// Big-O = O(n) Linear - 1 loop

const fibonacci = (n) => {
  const fib = [0, 1];

  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return fib;
};

console.log(`Fibonacci sequence to 2: ${fibonacci(2)}`);
console.log(`Fibonacci sequence to 5: ${fibonacci(5)}`);
console.log(`Fibonacci sequence to 7: ${fibonacci(7)}`);
