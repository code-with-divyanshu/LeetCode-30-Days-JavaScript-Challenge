// 1. Using Index-Based Assignment

var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};

const map1 = map([1, 2, 3], function plusone(n) {
  return n + 1;
});
const map2 = map([1, 2, 3], function plusI(n, i) {
  return n + i;
});
const map3 = map([1, 2, 3], function constant(n, i) {
  return 42;
});

console.log(map1); // [ 2, 3, 4]
console.log(map2); // [ 1, 3, 5]
console.log(map3); // [ 42, 42, 42]

// 2. Approach 2: Using `push()` Method

var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

const map4 = map([10, 20, 30], function plusone(n) {
  return n + 1;
});
const map5 = map([10, 20, 30], function plusI(n, i) {
  return n + i;
});
const map6 = map([10, 20, 30], function constant(n, i) {
  return 42;
});

console.log(map4); // [ 11, 21, 31]
console.log(map5); // [ 10, 21, 32]
console.log(map6); // [ 42, 42, 42]
