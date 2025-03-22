// Approach 1: Using a `for` Loop (Best & Optimized)

var compose = function (functions) {
  return function (x) {
    let val = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      val = functions[i](val);
    }
    return val;
  };
};

const fn = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn(4));

// Approach 1: Using an Explicit Function Return

var compose = (functions) => (x) => {
  for (let i = functions.length - 1; i >= 0; i--) {
    x = functions[i](x);
  }
  return x;
};

const fn2 = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(fn2(4));
