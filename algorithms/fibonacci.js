const fibonacciRecursive = (index) => {
  const memo = {};

  const recursive = (n) => {
    if (n < 0) return 'Invalid Index';
    else if (n <= 1) return n;
    else if (memo[n]) return memo[n];

    const result = recursive(n - 2) + recursive(n - 1);
    memo[n] = result;
    return result;
  };
  return recursive(index);
};

const fibonacciIterative = (n) => {
  const sequence = [0, 1];

  if (n < 0) return 'Invalid Index';
  else if (n <= 1) return n;

  let counter = 2;

  while (counter <= n) {
    sequence.push(sequence[counter - 2] + sequence[counter - 1]);
    counter++;
  }

  return sequence[n];
};

// Driver Code
console.log(fibonacciRecursive(100));
console.log(fibonacciIterative(100));