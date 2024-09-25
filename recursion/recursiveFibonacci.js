// using recursion to solve fibonacci series
// recursion - a function calling itself severally, till a base conditon
// BigO = O(2^n)
const fibo = (n) => {
  if (n < 2) {
    return n;
  }

  return fibo(n - 1) + fibo(n - 2);
};

console.log("Fibonnacci of 5:", fibo(5));
console.log("Fibonnacci of 0:", fibo(0));
console.log("Fibonnacci of 1:", fibo(1));
console.log("Fibonnacci of 6:", fibo(6));
console.log("Fibonnacci of 20:", fibo(7));
