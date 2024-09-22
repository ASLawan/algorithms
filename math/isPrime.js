// checks if a given number is a prime number
// numbers that that are only divisile ny one and themselves

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(`5 is a prime number: ${isPrime(5)}`);
console.log(`9 is a prime number: ${isPrime(9)}`);
console.log(`13 is a prime number: ${isPrime(13)}`);
console.log(`19 is a prime number: ${isPrime(19)}`);
console.log(`21 is a prime number: ${isPrime(21)}`);
