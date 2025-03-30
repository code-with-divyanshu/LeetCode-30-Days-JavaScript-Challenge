// Approach 1: Using Promise.race() with Timeout

var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise = [
      new Promise((res) => res(fn(...args))), // Executes the function
      new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t)), // Timeout error
    ];

    return Promise.race(promise); // Returns whichever finishes first
  };
};

const limited1 = timeLimit(
  (t) => new Promise((res) => setTimeout(res, t)),
  100
);
limited1(150).catch(console.log); // "Time Limit Exceeded" at t=100ms

// Approach 2: Using setTimeout() Inside a New Promise

var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args)
        .then(res)
        .catch(rej);
    });
  };
};

const limited2 = timeLimit(
  (t) => new Promise((res) => setTimeout(res, t)),
  100
);
limited2(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
