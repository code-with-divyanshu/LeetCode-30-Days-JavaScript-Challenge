// 1.

var createCounter = function (n) {
  return function () {
    return n++;
  };
};

const counter1 = createCounter(10);

console.log(counter1()); // = 10  The first time counter() is called, it returns n.
console.log(counter1()); // = 11  Returns 1 more than the previous time.
console.log(counter1()); // = 12  Returns 1 more than the previous time.

// 2.

var createCounter = function (n) {
  return () => n++;
};

const counter2 = createCounter(20);

console.log(counter2()); // = 20  The first time counter() is called, it returns n.
console.log(counter2()); // = 21  Returns 1 more than the previous time.
console.log(counter2()); // = 22  Returns 1 more than the previous time.

// 3.

var createCounter = (n) => () => n++;

const counter3 = createCounter(30);

console.log(counter3()); // = 30  The first time counter() is called, it returns n.
console.log(counter3()); // = 31  Returns 1 more than the previous time.
console.log(counter3()); // = 32  Returns 1 more than the previous time.
