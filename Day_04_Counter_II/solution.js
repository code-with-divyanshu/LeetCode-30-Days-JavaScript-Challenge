// 1. Using Function Expressions

var createCounter = function (init) {
  let count = init;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      return (count = init);
    },
  };
};

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.reset()); // 5
console.log(counter.decrement()); // 4

// 2. Using Arrow Functions

var createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
    reset: () => {
      return (count = init);
    },
  };
};

const counter2 = createCounter(5);
console.log(counter2.increment()); // 6
console.log(counter2.reset()); // 5
console.log(counter2.decrement()); // 4

// 3. Optimized One-Liner

var createCounter = (init) => {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};

const counter3 = createCounter(5);
console.log(counter3.increment()); // 6
console.log(counter3.reset()); // 5
console.log(counter3.decrement()); // 4
