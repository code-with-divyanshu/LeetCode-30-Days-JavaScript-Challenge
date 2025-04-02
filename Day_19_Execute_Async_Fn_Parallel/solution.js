// Approach 1: Using a `for` Loop

var promiseAll = function (functions) {
  return new Promise((res, rej) => {
    let results = [];
    let counter = 0;
    let len = functions.length;

    if (len === 0) {
      res(results);
    }

    for (let i = 0; i < len; i++) {
      functions[i]()
        .then((result) => {
          results[i] = result;
          counter++;

          if (counter === len) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};

const promise1 = promiseAll([() => new Promise((res) => res(10))]);
promise1.then(console.log); // [10]

// Approach 2: Using `forEach()` for Cleaner Execution

var promiseAll = function (functions) {
  return new Promise((res, rej) => {
    let results = [];
    let counter = 0;
    let len = functions.length;

    if (len === 0) {
      res(results);
    }

    functions.forEach((fn, index) => {
      fn()
        .then((val) => {
          results[index] = val;
          counter++;

          if (counter === len) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};

const promise2 = promiseAll([() => new Promise((res) => res(42))]);
promise2.then(console.log); // [42]
