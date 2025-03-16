# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 2: Counter

## 🚀 Problem Statement

**LeetCode Problem:** [`Counter`](https://leetcode.com/problems/counter/description/)

📌 **Description:**
Create a function that acts as a counter. It should accept a starting value `n` and return a function that increments and returns `n` each time it's called.

### ✍️ Example:

```js
const counter = createCounter(10);
counter(); // 10
counter(); // 11
counter(); // 12
```

---

## 🧠 Intuition

This problem is a classic use case of **closures** in JavaScript. We need to maintain a state (`n`) that persists across function calls.

---

## 💡 Approach

### 🔹 **Approach 1: Using a Traditional Function Closure**

```js
var createCounter = function (n) {
  return function () {
    return n++;
  };
};
```

📌 **Explanation:**

- `createCounter(n)` initializes `n` and returns a function.
- The returned function, when invoked, **increments and returns** `n`.

---

### 🔹 **Approach 2: Using Arrow Functions**

```js
var createCounter = function (n) {
  return () => n++;
};
```

📌 **Key Improvement:**

- Uses an **arrow function** instead of a regular function.
- The syntax is cleaner and more concise.

---

### 🔹 **Approach 3: Most Optimized One-Liner**

```js
var createCounter = (n) => () => n++;
```

📌 **Why is this better?**

- This is the **most compact version**, using **nested arrow functions**.
- No function keyword, no return statement – just pure **functional simplicity!**

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(1)$$ → Each call runs in constant time.
- **Space Complexity:** $$O(1)$$ → Only a single variable `n` is stored in closure.

---

## ✅ Solution Code

```javascript
/**
 * @param {number} n
 * @return {Function}
 */
var createCounter = (n) => () => n++;

/**
 * const counter = createCounter(10);
 * counter(); // 10
 * counter(); // 11
 * counter(); // 12
 */
```

---

## 📚 Important Topics to Learn

- **Closures**: How JavaScript functions remember their lexical scope.
- **Higher-Order Functions**: Functions returning other functions.
- **Arrow Functions**: Writing concise JavaScript functions.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Counter - Solution`](https://leetcode.com/problems/counter/solutions/6543225/leetcode-counter-by-runl4avdwj-38tc)

---

## 🚀 Support & Feedback

✅ Found this helpful? **Give it a ⭐ on GitHub!**
💬 Let’s discuss alternative solutions & improvements! 🚀
