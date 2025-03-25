# 🚀 **LeetCode - 30 Days JavaScript Challenge**

## 📅 **Day 11: Memoize Function**

## 🔥 **Problem Statement**

🔗 **LeetCode Problem:** [`2623. Memoize`](https://leetcode.com/problems/memoize/)

📌 **Description:**  
We need to implement a **memoization function** that optimizes repeated function calls by storing previously computed results. Memoization is an essential **optimization technique** widely used in **dynamic programming, recursive solutions, and performance enhancements**.

---

## 🧠 **Intuition**

### 🔥 **Why do we need Memoization?**

In JavaScript, functions are **stateless by default**—they don’t remember previous computations. Memoization **adds state** by storing results of previous function calls and returning the cached value when the same inputs occur again.

### 🔥 **What is Caching?**

- **Caching** is the process of **storing data temporarily** so future requests can be served faster.
- **Memoization** is a special form of caching **for function calls**, improving efficiency in computationally expensive operations.

### 🚀 **Real-World Applications of Memoization:**

✔️ **Optimizing API Calls**: Avoiding redundant network requests.  
✔️ **Dynamic Programming**: Fibonacci, factorial, and recursion-heavy problems.  
✔️ **Browser Performance**: Caching heavy computations for smooth UI interactions.  
✔️ **Autocomplete & Search**: Storing frequently used query results.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `Map` for Caching** (Best for Performance)

```javascript
function memoize(fn) {
  let cache = new Map();
  return (...args) => {
    let key = args.toString();
    if (cache.has(key)) {
      console.log(`Fetching from cache: ${key}`);
      return cache.get(key); // Return cached result
    }
    let result = fn(...args);
    cache.set(key, result); // Store result in cache
    console.log(`Computing result: ${key}`);
    return result;
  };
}
```

📌 **Why this approach?**  
✔️ Uses **Map**, which provides **O(1) lookup time** for efficient caching.  
✔️ Converts arguments into a **string key** to uniquely store function inputs.  
✔️ **Optimized for performance** by leveraging built-in JavaScript structures.

---

### 🔹 **Approach 2: Using an Object as Cache** (Simpler Alternative)

```javascript
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log(`Fetching from cache: ${key}`);
      return cache[key]; // Return cached result
    }
    let result = fn(...args);
    cache[key] = result; // Store result in cache
    console.log(`Computing result: ${key}`);
    return result;
  };
}
```

📌 **Why this approach?**  
✔️ Uses a **plain object (`{}`) instead of `Map`**, making it slightly simpler.  
✔️ **JSON.stringify(args)** ensures complex objects and arrays can be used as keys.  
✔️ Works well in most cases but **can have issues with non-stringifiable inputs**.

---

## 📊 **Performance Analysis**

| Approach              | Lookup Time               | Storage Type                 | Best Use Case                |
| --------------------- | ------------------------- | ---------------------------- | ---------------------------- |
| **Using `Map`**       | **O(1)**                  | Hash-based key-value store   | Best for large-scale caching |
| **Using Object `{}`** | **O(n)** (for worst case) | Plain object key-value store | Simpler but slightly slower  |

---

## ⏳ **Complexity Analysis**

- **Time Complexity:**

  - **Best Case:** $$O(1)$$ for retrieving cached results.
  - **Worst Case:** $$O(n)$$ if computing new results for `n` unique inputs.

- **Space Complexity:**
  - **O(n)** for storing `n` unique function calls in memory.

---

## ✅ **Solution Code**

```javascript
/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      return cache[key]; // Return cached result
    }
    let result = fn(...args);
    cache[key] = result; // Store result in cache
    return result;
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *   callCount += 1;
 *   return a + b;
 * });
 *
 * console.log(memoizedFn(2, 3)); // 5
 * console.log(memoizedFn(2, 3)); // 5 (cached)
 * console.log(callCount); // 1
 */
```

---

## 📚 **Key Concepts to Learn**

✅ **Memoization & Caching**: Avoid redundant function calls to improve performance.  
✅ **Higher-Order Functions**: Functions that return other functions.  
✅ **Data Structures for Caching**: Understanding when to use `Map` vs `{}`.  
✅ **JavaScript Closures**: Functions remembering their lexical scope (cache storage).  
✅ **Performance Optimization**: Reducing computational overhead in repeated function calls.

---

## 🚀 **Best Practices for Memoization**

🔹 **Use `Map` instead of `{}` when possible** (better performance).  
🔹 **Limit cache size** to avoid excessive memory usage in large-scale applications.  
🔹 **Invalidate cache** when necessary (e.g., API calls that might change over time).  
🔹 **Avoid caching non-deterministic functions** (e.g., functions with random values or time-based outputs).

---

## 🔗 **Solution Discussion**

Check out my solution on LeetCode: [`2623. Memoize - Solution`](https://leetcode.com/problems/memoize/solutions/6577946/2623-leetcode-memoize-solution)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
