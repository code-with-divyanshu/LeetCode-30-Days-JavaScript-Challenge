# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 18: Debounce

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2627. Debounce](https://leetcode.com/problems/debounce/description)

📌 **Description:**  
We need to implement a **debounce function** that delays the execution of a given function `fn` until after `t` milliseconds have passed **since the last call**.

- If the function is called again before `t` milliseconds, the previous call is **canceled**.
- Ensures the function executes only **after a stable period of inactivity**.

---

## 🧠 Intuition

### 🔥 What is Debouncing?

Debouncing is a technique used to **control** how often a function executes. It ensures that:

- The function **executes only after a delay** (useful for input fields, resizing, etc.).
- **Prevents multiple rapid executions**, optimizing performance.

🔹 **Example Use Cases:**

- Preventing multiple API calls in search input.
- Optimizing expensive computations triggered by user actions.
- Handling window resize or scroll events efficiently.

---

## 💡 Approach

### **Approach: Using `setTimeout()` to Delay Execution**

🔹 **Steps to Implement:**

1. **Use a `timer` variable** to track the timeout.
2. When the function is called, **clear any previous timer** using `clearTimeout()`.
3. Start a new timer with `setTimeout()` to execute `fn` after `t` milliseconds.
4. If the function is called again before `t` expires, reset the timer.

---

## ✅ Solution Code

```javascript
/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
var debounce = function (fn, t) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, t);
  };
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */
```

📌 **Explanation:**

- Every time `debounce()` is called, we **clear any existing timer**.
- A **new timer starts**, delaying `fn` execution for `t` milliseconds.
- If another call is made **within `t` milliseconds**, the previous timer is **canceled**, and the countdown restarts.
- This ensures the function **executes only once** after a period of inactivity.

---

## ⏳ Complexity Analysis

- **Time Complexity:**
  - ⏳ **O(1)** (Each function call resets a single timeout).
- **Space Complexity:**
  - 🗂️ **O(1)** (Only one timer variable is maintained).

---

## 📚 Key Concepts to Learn

✅ **setTimeout & clearTimeout** for delay management.  
✅ **Closure** to maintain the timer reference.  
✅ **Function Execution Control** to optimize event handling.

---

## 🚀 Best Practices for Using Debounce

🔹 **Use debounce for event-heavy scenarios** like scrolling, typing, and resizing.  
🔹 **Choose an appropriate debounce delay** based on user interaction needs.  
🔹 **Avoid long debounce delays** that may result in a sluggish UI experience.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2627. Debounce - Solution](https://leetcode.com/problems/debounce/solutions/6603608/2627-debounce-solution-by-runl4avdwj-jlvs)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
