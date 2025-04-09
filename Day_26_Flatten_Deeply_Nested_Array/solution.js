// Approach: Recursive Flattening with Depth Check

var flat = function (arr, n) {
  let newArr = [];

  if (n === 0) return arr;

  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      newArr.push(...flat(ele, n - 1));
    } else {
      newArr.push(ele);
    }
  });

  return newArr;
};

let result1 = flat(
  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  0
);

console.log(result1); // [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]

let result2 = flat(
  [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]],
  1
);

console.log(result2); // [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]
