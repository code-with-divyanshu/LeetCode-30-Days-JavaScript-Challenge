//
var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};

let result1 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr;
  },
  0
);

console.log(result1);

//

var reduce = (nums, fn, init) => {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};

let result2 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr * curr;
  },
  100
);

console.log(result2);

//

var reduce = (nums, fn, init) => {
  nums.forEach((val) => {
    init = fn(init, val);
  });
  return init;
};

let result3 = reduce(
  [1, 2, 3, 4],
  function sum(accum, curr) {
    return accum + curr;
  },
  10
);

console.log(result3);
