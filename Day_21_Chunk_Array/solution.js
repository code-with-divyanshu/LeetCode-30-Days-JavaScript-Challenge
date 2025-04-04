// Approach 1: Using `slice()` with a `for` loop

var chunk = function (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

let ans1 = chunk([1, 2, 3, 4, 5], 1);
console.log(ans1);

// Approach 2: Two pointers with `while` loop

var chunk = function (arr, size) {
  let result = [];
  i = 0;
  j = size;
  while (i < arr.length) {
    result.push(arr.slice(i, j));
    i += size;
    j += size;
  }
  return result;
};

let ans2 = chunk([1, 9, 6, 3, 2], 3);
console.log(ans2); // [[1,9,6],[3,2]]

// Approach 3: Nested loop without slice()

var chunk = function (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let newArr = [];
    for (let j = i; j < arr.length; j++) {
      if (j < i + size) {
        newArr.push(arr[j]);
      }
    }
    result.push(newArr);
  }
  return result;
};

let ans3 = chunk([8, 5, 3, 2, 6], 6);
console.log(ans3); // [[8, 5, 3, 2, 6]];
