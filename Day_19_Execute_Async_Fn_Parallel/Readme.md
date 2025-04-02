# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 19: Execute Asynchronous Functions in Parallel

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2721. Execute Asynchronous Functions in Parallel](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/description)

📌 **Description:**  
We need to implement a function `promiseAll(functions)`, which takes an array of functions returning promises and executes them **in parallel**.

- The function **returns a single promise** that resolves with an array of results **in the same order** as the input functions.
- If **any function rejects**, the entire execution **fails immediately**, rejecting the returned promise.

---

## 🧠 Intuition

### 🔥 What is `Promise.all()`?

`Promise.all()` is a method that executes multiple promises **concurrently** and returns a new promise that:

- **Resolves** when all input promises are resolved.
- **Rejects immediately** if any promise fails.

🔹 **Example Use Cases:**

- Fetching multiple API requests in parallel.
- Running multiple independent computations concurrently.
- Speeding up batch processing tasks.

---

## 💡 Approach

### **Approach: Using a Loop or `forEach` for Parallel Execution**

🔹 **Steps to Implement:**

1. **Create an array `results`** to store resolved values in order.
2. **Track the number of completed functions** using a `counter` variable.
3. **Loop through each function**, execute it, and store the result **at the correct index**.
4. If any function rejects, **immediately reject the entire promise**.
5. Once all functions resolve, return the `results` array.

---

## ✅ Solution Code

### **Approach 1: Using a `for` Loop**

```javascript
var promiseAll = function (functions) {
  return new Promise((res, rej) => {
    let results = [];
    let counter = 0;
    let len = functions.length;

    if (len === 0) {
      res(results);
    }

    for (let i = 0; i < len; i++) {
      functions[i]()
        .then((result) => {
          results[i] = result;
          counter++;

          if (counter === len) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    }
  });
};
```

---

### **Approach 2: Using `forEach()` for Cleaner Execution**

```javascript
var promiseAll = function (functions) {
  return new Promise((res, rej) => {
    let results = [];
    let counter = 0;
    let len = functions.length;

    if (len === 0) {
      res(results);
    }

    functions.forEach((fn, index) => {
      fn()
        .then((val) => {
          results[index] = val;
          counter++;

          if (counter === len) {
            res(results);
          }
        })
        .catch((err) => {
          rej(err);
        });
    });
  });
};
```

📌 **Explanation:**

- A **results array** is used to store the resolved values **in order**.
- If a function resolves, **its result is stored at the correct index**.
- If all functions resolve, the promise resolves with the complete `results` array.
- If **any function fails**, we immediately reject the promise.

---

## ⏳ Complexity Analysis

- **Time Complexity:**

  - **Best case:** $$O(n)$$ – All promises resolve in parallel.
  - **Worst case:** $$O(n)$$ – Still parallel but affected by the slowest function.

- **Space Complexity:**
  - $$O(n)$$ – Stores results of `n` functions.

---

## 📚 Key Concepts to Learn

✅ **JavaScript Promises** – Handling asynchronous operations.  
✅ **Promise.all()** – Executing multiple promises in parallel.  
✅ **Parallel Execution** – Running multiple functions simultaneously.  
✅ **forEach vs for Loop** – Differences in async behavior.  
✅ **Error Handling in Promises** – Handling failures properly in parallel execution.

---

## 🚀 Best Practices for Using Parallel Execution

🔹 **Use parallel execution for independent tasks** to improve performance.  
🔹 **Handle errors carefully**, as one failure can stop execution.  
🔹 **Consider `Promise.allSettled()`** if you need all results, even if some fail.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2721. Execute Asynchronous Functions in Parallel - Solution](https://leetcode.com/problems/execute-asynchronous-functions-in-parallel/solutions/6607683/2721-execute-asynchronous-functions-in-p-47ky)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
