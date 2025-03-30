# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 16: Promise Time Limit

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2637. Promise Time Limit](https://leetcode.com/problems/promise-time-limit/description)

📌 **Description:**  
We need to create a function **`timeLimit(fn, t)`** that ensures that the provided function **`fn`** completes execution within `t` milliseconds.

- If `fn` resolves within the time limit, return its result.
- If `fn` exceeds the limit, reject the promise with **"Time Limit Exceeded"**.

---

## 🧠 Intuition

### 🔥 What is `Promise.race()`?

`Promise.race()` allows us to **race multiple promises** and return the result of the **first settled promise** (whether resolved or rejected).

🔹 **Syntax of `Promise.race()`**:

```javascript
Promise.race([promise1, promise2, ...])
```

- Returns the **first promise that resolves or rejects**.
- Useful for **handling timeouts in async operations**.

🔹 **How to Implement a Timeout?**

```javascript
new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t));
```

- Creates a **timeout promise** that rejects after `t` milliseconds.
- If the function doesn't resolve in time, the timeout promise rejects first.

---

## 💡 Approach

### **Approach 1: Using `Promise.race()` with a Timeout**

```javascript
var timeLimit = function (fn, t) {
  return async function (...args) {
    const promise = [
      new Promise((res) => res(fn(...args))), // Executes the function
      new Promise((_, rej) => setTimeout(() => rej("Time Limit Exceeded"), t)), // Timeout error
    ];

    return Promise.race(promise); // Returns whichever finishes first
  };
};
```

📌 **Explanation:**

1. We create **two promises**:
   - One for the actual function execution.
   - One that rejects after `t` milliseconds.
2. `Promise.race()` ensures that **whichever promise settles first is returned**.
3. If the function resolves before the timeout, return the result.
4. If the timeout occurs first, reject with `"Time Limit Exceeded"`.

✅ **Pros:**

- **Clean and concise** using `Promise.race()`.
- **Works well** for both synchronous and asynchronous functions.

---

### **Approach 2: Using `setTimeout()` Inside a New Promise**

```javascript
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args)
        .then(res)
        .catch(rej);
    });
  };
};
```

📌 **Differences from Approach 1:**

- Instead of `Promise.race()`, we **manually create a new `Promise`**.
- Inside the promise, we:
  - **Start a timeout** that rejects with `"Time Limit Exceeded"` after `t` milliseconds.
  - **Call `fn(...args)`, resolving or rejecting based on its result.**
- If the function resolves first, the timeout is ignored.

✅ **Pros:**

- **More control** over function execution.
- Works well for **promises that resolve asynchronously**.

---

## ⏳ Complexity Analysis

- **Time Complexity:**
  - ⏳ **O(1)** (Promise setup is constant-time, actual function execution depends on `fn`).
- **Space Complexity:**
  - 🗂️ **O(1)** (Only a few extra promises and timeouts are created).

---

## ✅ Solution Code

```javascript
/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function (fn, t) {
  return async function (...args) {
    return new Promise((res, rej) => {
      setTimeout(() => rej("Time Limit Exceeded"), t);
      fn(...args)
        .then(res)
        .catch(rej);
    });
  };
};

/**
 * Example Usage:
 *
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */
```

---

## 📚 Key Concepts to Learn

✅ **JavaScript Promises & Asynchronous Execution**  
✅ **Using `Promise.race()` to Set Time Limits**  
✅ **Handling Timeouts with `setTimeout()`**  
✅ **Error Handling in Promises (`.catch()`)**

---

## 🚀 Best Practices for Handling Async Time Limits

🔹 **Use `Promise.race()` for clean and efficient timeout handling.**  
🔹 **Handle errors properly to prevent unhandled promise rejections.**  
🔹 **Ensure proper cancellation mechanisms in real-world applications.**

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2637. Promise Time Limit - Solution](https://leetcode.com/problems/promise-time-limit/solutions/6596562/2637leetcode-promise-time-limit-solution-co5t)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
