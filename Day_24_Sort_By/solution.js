// Approach 1: Numeric Sort Using Subtraction

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

let result1 = sortBy([5, 4, 1, 2, 3], (x) => x);
console.log(result1);

// Approach 2: General Comparison Using Ternary

var sortBy = function (arr, fn) {
  return arr.sort((a, b) => (fn(a) > fn(b) ? 1 : -1));
};

let result2 = sortBy([{ x: 1 }, { x: 0 }, { x: -1 }], (d) => d.x);
console.log(result2);
