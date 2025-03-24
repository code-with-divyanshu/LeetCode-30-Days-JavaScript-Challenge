// Approach 1: Using a Counter (Basic & Easy to Understand)

var once = function (fn) {
  let called = 0;
  return function (...args) {
    called++;
    if (called > 1) {
      return undefined;
    } else {
      return fn(...args);
    }
  };
};

let fn1 = (a, b, c) => a * b * c;
let onceFn1 = once(fn1);
console.log(onceFn1(5, 7, 4)); // 140
console.log(onceFn1(2, 3, 6)); // returns undefined without calling fn
console.log(onceFn1(4, 6, 8)); // returns undefined without calling fn

//Approach 2: Using a Boolean Flag (More Optimized)

var once = function (fn) {
  let called = false;
  return function (...args) {
    if (!called) {
      called = true;
      return fn(...args);
    }
  };
};

let fn2 = (a, b, c) => a - b - c;
let onceFn2 = once(fn2);
console.log(onceFn2(8, 3, 4)); // 1
console.log(onceFn2(4, 9, 6)); // returns undefined without calling fn

// Approach 3: Using a Ternary Operator (Most Concise & Elegant)

var once = (fn) => {
  let isCalled = false;
  return (...args) =>
    !isCalled ? ((isCalled = true), fn(...args)) : undefined;
};

let fn3 = (a, b, c) => a + b + c;
let onceFn3 = once(fn3);
console.log(onceFn3(1, 2, 3)); // 6
console.log(onceFn3(2, 3, 6)); // returns undefined without calling fn
