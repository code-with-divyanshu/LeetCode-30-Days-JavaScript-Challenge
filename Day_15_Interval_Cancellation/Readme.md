# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 15: Interval Cancellation

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2725. Interval Cancellation](https://leetcode.com/problems/interval-cancellation/description)

📌 **Description:**  
We need to create a function **`cancellable(fn, args, t)`** that repeatedly executes function `fn` with the provided arguments (`args`) every `t` milliseconds. Additionally, the function should return a **cancel function** that stops further execution when called.

---

## 🧠 Intuition

### 🔥 What is `setInterval()`?

`setInterval()` is a JavaScript function that **repeatedly executes a function** at a fixed time interval.

🔹 **Syntax of `setInterval()`**:

```javascript
let interval = setInterval(callback, delay);
```

- `callback` – The function to execute repeatedly.
- `delay` – The time interval in milliseconds.

🔹 **Syntax of `clearInterval()`**:

```javascript
clearInterval(interval);
```

- `interval` – The reference returned by `setInterval()`, which is required to stop execution.

---

## 💡 Approach

### **Approach 1: Using `setInterval()` with a Cancellation Function**

```javascript
var cancellable = function (fn, args, t) {
  fn(...args);
  let interval = setInterval(() => fn(...args), t);
  return () => clearInterval(interval);
};
```

📌 **Explanation:**

1. The function `fn(...args)` executes **immediately** once before starting the interval.
2. We store the interval reference in `interval` to track execution.
3. We return a **cancel function** that calls `clearInterval(interval)`, stopping further executions.

---

### **Approach 2: Alternative Implementation with Explicit `cancelFn`**

```javascript
var cancellable = function (fn, args, t) {
  fn(...args);
  let interval = setInterval(() => {
    fn(...args);
  }, t);

  let cancelFn = () => {
    clearInterval(interval);
  };

  return cancelFn;
};
```

📌 **Differences from Approach 1:**

- The `cancelFn` is explicitly defined before returning.
- Both approaches function the same way, but this approach improves readability.

---

## ⏳ Complexity Analysis

- **Time Complexity:**
  - ⏳ **O(1)** (Constant time operations for setting and clearing the interval).
- **Space Complexity:**
  - 🗂️ **O(1)** (Only one variable `interval` is stored).

---

## ✅ Solution Code

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  fn(...args);
  let interval = setInterval(() => {
    fn(...args);
  }, t);

  let cancelFn = () => {
    clearInterval(interval);
  };

  return cancelFn;
};

/**
 * Example Usage:
 *
 * const result = [];
 * const fn = (x) => x * 2;
 * const args = [4], t = 35, cancelTimeMs = 190;
 * const start = performance.now();
 *
 * const log = (...argsArr) => {
 *     const diff = Math.floor(performance.now() - start);
 *     result.push({"time": diff, "returned": fn(...argsArr)});
 * };
 *
 * const cancel = cancellable(log, args, t);
 * setTimeout(cancel, cancelTimeMs);
 *
 * setTimeout(() => {
 *     console.log(result);
 * // [
 *                           //     {"time":0,"returned":8},
 *                           //     {"time":35,"returned":8},
 *                           //     {"time":70,"returned":8},
 *                           //     {"time":105,"returned":8},
 *                           //     {"time":140,"returned":8},
 *                           //     {"time":175,"returned":8}
 *                           // ]
 * }, cancelTimeMs + t + 15);
 */
```

---

## 📚 Key Concepts to Learn

✅ **JavaScript Event Loop & Asynchronous Execution**
✅ **Understanding `setInterval()` and `clearInterval()`**
✅ **Higher-Order Functions (Returning Functions in JavaScript)**
✅ **Callback Functions and Closures**

---

## 🚀 Best Practices for Handling Intervals

🔹 **Always store `setInterval()` references** if you need to cancel them later.
🔹 **Use `clearInterval()` carefully** to prevent unintended executions.
🔹 **Ensure immediate function execution if required (`fn(...args)`).**

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2725. Interval Cancellation - Solution](https://leetcode.com/problems/interval-cancellation/solutions/6592067/2725-leetcode-interval-cancellation-solu-gsmm)

---

## 💬 Discussion & Feedback

✅ If you found this helpful, **please star ⭐ the repository!**
💡 **Have a different approach? Found a bug?**
Let’s discuss and improve the solution together! 🚀🔥
