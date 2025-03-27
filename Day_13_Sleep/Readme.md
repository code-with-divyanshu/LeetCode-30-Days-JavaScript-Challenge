# 🚀 **LeetCode - 30 Days JavaScript Challenge**

## 📅 **Day 13: Sleep Function**

## 🔥 **Problem Statement**

🔗 **LeetCode Problem:** [`2621. Sleep`](https://leetcode.com/problems/sleep/)

📌 **Description:**  
We need to implement a **`sleep` function** that delays execution for a specified number of milliseconds before resolving. This is an essential concept in **JavaScript’s asynchronous execution**, where we often need controlled delays without blocking the event loop.

---

## 🧠 **Intuition**

### 🔥 **Why do we need `sleep()`?**

JavaScript is **asynchronous and single-threaded**, meaning it does **not** wait for operations to complete before moving on. Instead of blocking execution like some languages (e.g., Python’s `time.sleep()`), we use **Promises and `setTimeout()`** to introduce a delay **without freezing the program**.

### 🔥 **What is `setTimeout()`?**

- `setTimeout()` is a **built-in JavaScript function** that schedules a callback function to execute **after a specified delay**.
- It does **not** pause execution but **schedules** a function to run later.

🔹 **Syntax:**

```javascript
setTimeout(callback, delay);
```

- `callback` – Function to execute after the delay.
- `delay` – Time (in milliseconds) before execution.

🔹 **Example:**

```javascript
console.log("Start");
setTimeout(() => console.log("Delayed execution"), 2000);
console.log("End");
```

📌 **Output:**

```
Start
End
Delayed execution (after 2 sec)
```

🔹 **Why this order?**

- JavaScript does **not** block execution.
- `setTimeout()` schedules a function and immediately moves to the next line.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `await` with `setTimeout()` (Alternative Approach)**

```javascript
async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
}
```

📌 **Explanation:**

- A **new Promise** is created that resolves after `millis` milliseconds.
- `setTimeout(resolve, millis)` ensures execution pauses for the given time.
- `await` ensures the function **waits** before moving forward.

---

### 🔹 **Approach 2: Using Explicit `reject` Parameter (Main Code 🚀)**

```javascript
async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}
```

📌 **Why use `reject`?**

- While not needed for this case, adding `reject` is a **best practice** in case we need error handling in the future.
- This approach ensures better **scalability** if additional logic needs to be added inside `setTimeout()`.

---

## 📊 **Performance Analysis**

| Approach                 | Execution Style | Performance | Best Use Case         |
| ------------------------ | --------------- | ----------- | --------------------- |
| **Basic `setTimeout()`** | Callback-based  | ⏳ Fast     | Simple delays         |
| **Using Promises**       | Async execution | 🚀 Best     | Non-blocking delay ✅ |

---

## ⏳ **Complexity Analysis**

- **Time Complexity:**
  - ⏳ **O(1)** (Fixed time delay, independent of input size).
- **Space Complexity:**
  - 🗂️ **O(1)** (No extra data structures used).

---

## ✅ **Solution Code**

```javascript
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
  await new Promise((resolve, reject) => {
    setTimeout(resolve, millis);
  });
}

/**
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // ~100ms
 */
```

---

## 📚 **Key Concepts to Learn**

✅ **JavaScript Promises & Async/Await**  
✅ **Understanding `setTimeout()`**  
✅ **Handling Delays Without Blocking Execution**  
✅ **JavaScript Event Loop & Concurrency**

---

## 🚀 **Best Practices for Working with Delays**

🔹 **Use Promises for async delays** instead of blocking execution.  
🔹 **Prefer `await sleep()` over nested callbacks** for better readability.  
🔹 **Understand the JavaScript event loop** to avoid performance bottlenecks.

---

## 🔗 **Solution Discussion**

Check out my solution on LeetCode: [`2621. Sleep - Solution`](https://leetcode.com/problems/sleep/solutions/6585018/2621-leetcode-sleep-solution)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
