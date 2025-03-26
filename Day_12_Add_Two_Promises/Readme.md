# 🚀 **LeetCode - 30 Days JavaScript Challenge**

## 📅 **Day 12: Add Two Promises**

## 🔥 **Problem Statement**

🔗 **LeetCode Problem:** [`2723. Add Two Promises`](https://leetcode.com/problems/add-two-promises/)

📌 **Description:**  
We need to implement a function that **takes two promises** as input, waits for both to resolve, and returns the sum of their resolved values. This problem is designed to enhance understanding of **Promises, Async/Await, and Parallel Execution** in JavaScript.

---

## 🧠 **Intuition**

### 🔥 **Why do we need Promises?**

In JavaScript, operations like API calls or file reading are **asynchronous**—they don’t complete immediately. **Promises** allow us to handle such operations in a cleaner and more manageable way.

### 🔥 **What is Async/Await?**

- `async` makes a function return a **Promise**.
- `await` **pauses execution** until the Promise resolves, allowing us to write async code **like synchronous code**.

### 🔥 **What is `Promise.all()`?**

- `Promise.all([p1, p2])` **waits for both promises** to resolve **simultaneously**, returning an array of results.
- If **either promise fails**, `Promise.all()` **rejects** immediately.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `await` Sequentially**

```javascript
var addTwoPromises = async function (promise1, promise2) {
  let val1 = await promise1;
  let val2 = await promise2;
  return val1 + val2;
};
```

📌 **Why?**  
✔️ Simple and easy to understand.  
❌ **Inefficient**, as `promise2` only starts **after** `promise1` resolves.

---

### 🔹 **Approach 2: Using `Promise.all()` (Best Approach 🚀)**

```javascript
var addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};
```

📌 **Why this approach?**  
✔️ **Parallel execution** – both promises resolve **simultaneously**.  
✔️ **Optimized performance** – no unnecessary waiting.

---

### 🔹 **Approach 3: Concise Arrow Function (One-liner 🤩)**

```javascript
var addTwoPromises = async (promise1, promise2) =>
  (await promise1) + (await promise2);
```

📌 **Why?**  
✔️ **Short and elegant**.  
❌ **Same inefficiency** as Approach 1 (promises execute sequentially).

---

## 📊 **Performance Analysis**

| Approach                | Execution Style    | Performance | Best Use Case  |
| ----------------------- | ------------------ | ----------- | -------------- |
| **Sequential `await`**  | One after another  | ⏳ Slower   | Simple cases   |
| **Using `Promise.all`** | Parallel execution | 🚀 Fastest  | Best choice ✅ |
| **One-liner `await`**   | Sequential         | 🔻 Slower   | Short syntax   |

---

## ⏳ **Complexity Analysis**

- **Time Complexity:**
  - ⏳ **O(1) + O(1) = O(1)** (Both promises resolve once).
- **Space Complexity:**
  - 🗂️ **O(1)** (Stores only two resolved values).

---

## ✅ **Solution Code**

```javascript
/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function (promise1, promise2) {
  const [val1, val2] = await Promise.all([promise1, promise2]);
  return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
```

---

## 📚 **Key Concepts to Learn**

✅ **JavaScript Promises & Async/Await**  
✅ **Promise.all() for Parallel Execution**  
✅ **Handling Multiple Asynchronous Operations**  
✅ **Error Handling in Promises (`.catch()` & `try...catch`)**

---

## 🚀 **Best Practices for Working with Promises**

🔹 **Use `Promise.all()` for concurrent execution** to improve performance.  
🔹 **Handle errors properly** with `.catch()` or `try...catch`.  
🔹 **Avoid nesting Promises** – use async/await for better readability.

---

## 🔗 **Solution Discussion**

Check out my solution on LeetCode: [`2723. Add Two Promises - Solution`](https://leetcode.com/problems/add-two-promises/solutions/6581849/2723-leetcode-add-two-promises-solution-e86ar)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
