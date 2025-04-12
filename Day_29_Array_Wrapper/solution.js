// Constructor Function + Prototype Methods

var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((prev, curr) => prev + curr, 0);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};

const obj1 = new ArrayWrapper([1, 2]);
const obj2 = new ArrayWrapper([3, 4]);
let ans1 = obj1 + obj2;
console.log(ans1); // 10

let ans2 = String(obj1);
console.log(ans2); // "[1,2]"

let ans3 = String(obj2);
console.log(ans3); // "[3,4]"
