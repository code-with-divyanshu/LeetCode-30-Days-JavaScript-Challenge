// Approach 1: Using a simple `for` loop and an object

Array.prototype.groupBy = function (fn) {
  let obj = {};
  for (let i = 0; i < this.length; i++) {
    let key = fn(this[i]);
    if (obj[key] === undefined) {
      obj[key] = [this[i]];
    } else {
      obj[key].push(this[i]);
    }
  }
  return obj;
};

let group = [1, 2, 3].groupBy(String);
console.log(group); // {"1":[1],"2":[2],"3":[3]}
