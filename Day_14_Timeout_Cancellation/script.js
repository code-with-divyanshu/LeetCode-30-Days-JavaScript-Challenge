// Approach 1: Using `setTimeout()` with a Cancellation Function

var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timer);
  };
};

const fn1 = (x) => console.log(x * 5);
const args1 = [2],
  t1 = 20,
  cancelTimeMs1 = 50;

const cancel1 = cancellable(fn1, args1, t1);
setTimeout(cancel1, cancelTimeMs1); // Cancels execution before 20ms

//  Approach 2: Passing Arguments Directly to setTimeout()

var cancellable = function (fn, args, t) {
  let timer = setTimeout(fn, t, ...args);
  return () => clearTimeout(timer);
};

const fn2 = (x1, x2) => console.log(x1 * x2);
const args2 = [2, 4],
  t2 = 30,
  cancelTimeMs2 = 100;

const cancel2 = cancellable(fn2, args2, t2);
setTimeout(cancel2, cancelTimeMs2); // Cancels execution before 30ms
