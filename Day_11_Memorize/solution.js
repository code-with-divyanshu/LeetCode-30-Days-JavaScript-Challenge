// Approach 1: Using `Map` for Caching (Best for Performance)

function memoize(fn) {
  let cache = new Map();
  return (...args) => {
    let key = args.toString();
    if (cache.has(key)) {
      console.log(`Fetching from cache: ${key}`);
      return cache.get(key); // Return cached result
    }
    let result = fn(...args);
    cache.set(key, result); // Store result in cache
    console.log(`Computing result: ${key}`);
    return result;
  };
}

let callCount1 = 0;
const memoizedFn1 = memoize(function (a, b) {
  callCount1 += 1;
  return a * b;
});
console.log(memoizedFn1(1, 3)); // 3
console.log(memoizedFn1(2, 3)); // 6
console.log(memoizedFn1(1, 3)); // 3
console.log(callCount1); // 2

// Approach 2: Using an Object as Cache (Simpler Alternative)

function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log(`Fetching from cache: ${key}`);
      return cache[key]; // Return cached result
    }
    let result = fn(...args);
    cache[key] = result; // Store result in cache
    console.log(`Computing result: ${key}`);
    return result;
  };
}

let callCount2 = 0;
const memoizedFn2 = memoize(function (a, b) {
  callCount2 += 1;
  return a + b;
});
console.log(memoizedFn2(2, 3)); // 5
console.log(memoizedFn2(2, 3)); // 5
console.log(callCount2); // 1
