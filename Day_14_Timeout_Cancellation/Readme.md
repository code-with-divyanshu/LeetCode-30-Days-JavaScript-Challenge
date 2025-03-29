# 🚀 **LeetCode - 30 Days JavaScript Challenge**

## 📅 **Day 14: Timeout Cancellation**

## 🔥 **Problem Statement**

🔗 **LeetCode Problem:** [`2715. Timeout Cancellation`](https://leetcode.com/problems/timeout-cancellation/description)

📌 **Description:**  
We need to create a function **`cancellable(fn, args, t)`** that schedules the execution of function `fn` with the provided arguments (`args`) after `t` milliseconds. Additionally, the function should return a **cancel function** that, when called, prevents the scheduled function from executing.

---

## 🧠 **Intuition**

### 🔥 **What is `setTimeout()`?**

`setTimeout()` is a JavaScript function used to execute a function **after a delay** (specified in milliseconds). However, sometimes we may need to **cancel** a scheduled timeout before it runs. This can be done using **`clearTimeout()`**.

🔹 **Syntax of `setTimeout()`**:

```javascript
let timer = setTimeout(callback, delay);
```

- `callback` – The function to execute after the delay.
- `delay` – The time in milliseconds before execution.

🔹 **Syntax of `clearTimeout()`**:

```javascript
clearTimeout(timer);
```

- `timer` – The timeout reference returned by `setTimeout()`.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `setTimeout()` with a Cancellation Function**

We store the timeout reference in a variable and return a function that **cancels the execution** using `clearTimeout()`.

```javascript
var cancellable = function (fn, args, t) {
  let timer = setTimeout(() => {
    fn(...args);
  }, t);

  return () => {
    clearTimeout(timer);
  };
};
```

📌 **Explanation:**

1. We use `setTimeout()` to schedule the execution of `fn(args)` after `t` milliseconds.
2. We store the timeout reference (`timer`) to keep track of the scheduled execution.
3. We return a **cancel function** that calls `clearTimeout(timer)`, stopping the execution if called before `t` milliseconds.

---

## ✅ Approach 2: Passing Arguments Directly to setTimeout() **Optimized Solution**

Another way to implement this is by passing the function directly to `setTimeout()`:

```javascript
var cancellable = function (fn, args, t) {
  let timer = setTimeout(fn, t, ...args);
  return () => clearTimeout(timer);
};
```

📌 **Why is this efficient?**

- JavaScript allows **additional arguments** to be passed directly in `setTimeout()`, so we don’t need an explicit arrow function.
- This reduces function overhead and improves readability.

---

## ⏳ **Complexity Analysis**

- **Time Complexity:**
  - ⏳ **O(1)** (Constant time operations for setting and clearing the timeout).
- **Space Complexity:**
  - 🗂️ **O(1)** (Only one variable `timer` is stored).

---

## ✅ **Solution Code**

```javascript
/**
 * @param {Function} fn
 * @param {Array} args
 * @param {number} t
 * @return {Function}
 */
var cancellable = function (fn, args, t) {
  let timer = setTimeout(fn, t, ...args);
  return () => clearTimeout(timer);
};

/**
 * Example Usage:
 *
 * const fn = (x) => console.log(x * 5);
 * const args = [2], t = 20, cancelTimeMs = 50;
 *
 * const cancel = cancellable(fn, args, t);
 * setTimeout(cancel, cancelTimeMs); // Cancels execution before 20ms
 */
```

---

## 📚 **Key Concepts to Learn**

✅ **JavaScript Event Loop & Asynchronous Execution**  
✅ **Understanding `setTimeout()` and `clearTimeout()`**  
✅ **Higher-Order Functions (Returning Functions in JavaScript)**  
✅ **Callback Functions and Closures**

---

## 🚀 **Best Practices for Handling Timeouts**

🔹 **Always store `setTimeout()` references** if you need to cancel them later.  
🔹 **Use `clearTimeout()` carefully** to prevent unintended function executions.  
🔹 **Prefer `setTimeout(fn, t, ...args)`** for cleaner and optimized code.

---

## 🔗 **Solution Discussion**

Check out my solution on LeetCode: [`2715. Timeout Cancellation - Solution`](https://leetcode.com/problems/timeout-cancellation/solutions/6589770/2715leetcode-timeout-cancellation-soluti-jhx3)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
