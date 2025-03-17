// 1.

var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      }
      throw new Error("Not Equal");
    },

    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

// 2.

var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) return true;
      throw new Error("Not Equal");
    },

    notToBe: function (otherVal) {
      if (val !== otherVal) return true;
      throw new Error("Equal");
    },
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"

// 3.

var expect = function (val) {
  return {
    toBe: (otherVal) =>
      val === otherVal
        ? true
        : (() => {
            throw new Error("Not Equal");
          })(),

    notToBe: (otherVal) =>
      val !== otherVal
        ? true
        : (() => {
            throw new Error("Equal");
          })(),
  };
};

console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
