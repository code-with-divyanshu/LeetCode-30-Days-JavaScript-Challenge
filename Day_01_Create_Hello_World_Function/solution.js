// solution 1 - Using Traditional Arrow Function

var createHelloWorld = function () {
  return (...args) => {
    return "Hello World";
  };
};

const f = createHelloWorld();
console.log(f()); // "Hello World"

// solution 2 -  Using Implicit Return (Cleaner Version)

var createHelloWorld = function () {
  return (...args) => "Hello World";
};

const fn = createHelloWorld();
console.log(fn()); // "Hello World"

// solution 3 - Most Optimized One-Liner

var createHelloWorld =
  () =>
  (...args) =>
    "Hello World";

const fns = createHelloWorld();
console.log(fns()); // "Hello World"
