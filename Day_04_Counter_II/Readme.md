# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 4: Counter

## 📌 Problem Statement

**LeetCode Problem:** [`CounterII`](https://leetcode.com/problems/counter-ii/description/)

📌 **Description:**
Create a function `createCounter` that takes an initial integer and returns an object containing three methods:

- `increment()`: Increases the counter by 1 and returns the updated value.
- `decrement()`: Decreases the counter by 1 and returns the updated value.
- `reset()`: Resets the counter to the initial value and returns it.

---

## 🧠 Intuition

The problem requires implementing a function that returns an object with three methods. This involves **closures** to retain the state of the counter across function calls.

---

## 💡 Approach

### 🌹 **Approach 1: Using Function Expressions**

```javascript
var createCounter = function (init) {
  let count = init;
  return {
    increment: function () {
      return ++count;
    },
    decrement: function () {
      return --count;
    },
    reset: function () {
      return (count = init);
    },
  };
};
```

📌 **Explanation:**

- `count` stores the initial value.
- `increment` increases `count` and returns it.
- `decrement` decreases `count` and returns it.
- `reset` restores `count` to `init`.

---

### 🌹 **Approach 2: Using Arrow Functions**

```javascript
var createCounter = function (init) {
  let count = init;
  return {
    increment: () => {
      return ++count;
    },
    decrement: () => {
      return --count;
    },
    reset: () => {
      return (count = init);
    },
  };
};
```

📌 **Key Improvement:**

- Uses **arrow functions** for shorter syntax.
- Works the same as Approach 1 but is more concise.

---

### 🌹 **Approach 3: Optimized One-Liner**

```javascript
var createCounter = (init) => {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};
```

📌 **Why is this better?**

- Uses **arrow functions** & withour **return**.
- Keeps the implementation minimal and clean.

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(1)$$ → Each method runs in constant time.
- **Space Complexity:** $$O(1)$$ → No extra space is used beyond storing the counter.

---

## ✅ Solution Code

```javascript
/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
  let count = init;
  return {
    increment: () => ++count,
    decrement: () => --count,
    reset: () => (count = init),
  };
};

/**
 * const counter = createCounter(5);
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
```

---

## 📚 Important Topics to Learn

- **Closures**: Functions retaining their outer scope variables.
- **Arrow Functions**: Writing concise and readable JavaScript functions.
- **Object Methods**: Creating objects with methods that maintain state.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`CounterII - Solution`](https://leetcode.com/problems/counter-ii/solutions/6551327/leetcode-counter-ii)

---

## 🚀 Support & Feedback

👌 Found this helpful? **Give it a ⭐ on GitHub!**
💬 Let’s discuss alternative solutions & improvements! 🚀
