// Approach 1: Using `for` Loop

var filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

const result1 = filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});
console.log(result1); // [ 20, 30 ]

// Approach 2: Using `forEach()` (Best & Optimized)

var filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      newArr.push(value);
    }
  });
  return newArr;
};

const result2 = filter([-2, -1, 0, 1, 2], function plusOne(n) {
  return n + 1;
});
console.log(result2); // [ -2, 0, 1, 2 ]
