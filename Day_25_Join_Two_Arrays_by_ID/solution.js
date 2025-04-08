// Approach: Combine, Merge by ID, and Extract Values

var join = function (arr1, arr2) {
  let combineArr = arr1.concat(arr2);
  let res = {};

  combineArr.forEach((obj) => {
    let id = obj.id;
    if (!res[id]) {
      res[id] = { ...obj };
    } else {
      res[id] = { ...res[id], ...obj };
    }
  });

  return Object.values(res);
};

let result1 = join(
  (arr1 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ]),
  (arr2 = [{ id: 3, x: 5 }])
);

console.log(result1); //  [ { id: 1, x: 1 }, { id: 2, x: 9 }, { id: 3, x: 5 } ]

let result2 = join(
  (arr1 = [
    { id: 1, x: 2, y: 3 },
    { id: 2, x: 3, y: 6 },
  ]),
  (arr2 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ])
);

console.log(result2); //  [{ id: 1, x: 2, y: 3 }, { id: 2, x: 10, y: 20 },  { id: 3, x: 0, y: 0 }]
