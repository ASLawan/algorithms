// climbing staircase problem - calculates number of ways to climb given number of stairs
// you can only climb a step at a time or two steps at a time
// total number of ways to climbe the steps will be
// sum of ways climbing one step at a time plus ways climbing two steps at time

const climbingStaircase = (n) => {
  let numberOfWays = [1, 2];

  for (let i = 2; i <= n; i++) {
    numberOfWays[i] = numberOfWays[i - 1] + numberOfWays[i - 2];
  }

  return numberOfWays[n - 1];
};

console.log("Number of ways to climb 1 stairs", climbingStaircase(1));
console.log("Number of ways to climb 2 stairs", climbingStaircase(2));
console.log("Number of ways to climb 3 stairs", climbingStaircase(3));
console.log("Number of ways to climb 4 stairs", climbingStaircase(4));
console.log("Number of ways to climb 5 stairs", climbingStaircase(5));
