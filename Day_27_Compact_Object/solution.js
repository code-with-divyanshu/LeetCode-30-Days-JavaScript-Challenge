// Approach: Recursive Traversal with Boolean Filtering

var compactObject = function (obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  let newObj = {};
  for (let key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) newObj[key] = value;
  }
  return newObj;
};

let result1 = compactObject([null, 0, false, 1]);
console.log(result1);

let result2 = compactObject({ a: null, b: [false, 1] });
console.log(result2);
