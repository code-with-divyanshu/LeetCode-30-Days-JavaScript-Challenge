// Approach 1: Using `JSON.stringify()`

var isEmpty = function (obj) {
  return JSON.stringify(obj).length <= 2 ? true : false;
};

console.log(isEmpty({ a: 3, b: 6 })); // false
console.log(isEmpty(new Object())); // true

// Approach 2: Using `Object.keys()` (Efficient & Recommended)

var isEmpty = function (obj) {
  return !Object.keys(obj).length;
};

console.log(isEmpty({})); // true
console.log(isEmpty({ a: 1 })); // false
