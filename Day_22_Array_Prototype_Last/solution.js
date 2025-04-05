// Approach 1: Using Ternary Operator and Length Check

Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

const arr = [1, 2, 3];
let result = arr.last();
console.log(result); // 3

const arr2 = [];
let result2 = arr2.last();
console.log(result2); // -1
