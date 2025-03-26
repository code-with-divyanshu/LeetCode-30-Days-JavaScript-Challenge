// Approach 1: Using await Sequentially

var addTwoPromises = async function (promise1, promise2) {
  let val1 = await promise1;
  let val2 = await promise2;
  return val1 + val2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(2)).then(console.log); // 4

//  Approach 2: Using Promise.all() (Best Approach 🚀)

var addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};

addTwoPromises(Promise.resolve(8), Promise.resolve(2)).then(console.log); // 10

// Approach 3: Concise Arrow Function (One-liner 🤩)

var addTwoPromises = async (promise1, promise2) =>
  (await promise1) + (await promise2);

addTwoPromises(Promise.resolve(12), Promise.resolve(21)).then(console.log); // 33
