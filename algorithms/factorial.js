const factorialRecursive = (n) => (n <= 2) ? n : n * factorialRecursive(n - 1);

const factorialIterative = (n) => {
  if (n <= 2) return n;

  let result = 2;
  for (let i = 3; i <= n; i++) {
    result *= i;
  }
  return result;
};

console.log(factorialRecursive(4));
console.log(factorialIterative(4));