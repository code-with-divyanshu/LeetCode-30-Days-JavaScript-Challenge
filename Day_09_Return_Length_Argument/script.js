// Approach 1: Using `Rest Parameters` (Best & Optimized)

var argumentsLength = function (...args) {
  return args.length;
};

console.log(argumentsLength(1, 2, 3)); // 3

// Approach 2: Using a `for` Loop

var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
};

console.log(argumentsLength({}, null, "3", 5)); // 4
