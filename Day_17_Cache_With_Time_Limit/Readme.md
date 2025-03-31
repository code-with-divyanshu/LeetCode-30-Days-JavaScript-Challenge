# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 17: Cache With Time Limit

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2622. Cache With Time Limit](https://leetcode.com/problems/cache-with-time-limit/description/)

📌 **Description:**  
We need to implement a **cache with a time limit**, meaning each key-value pair should be stored temporarily and automatically removed after a set duration.

- `set(key, value, duration)`: Stores the key-value pair for `duration` milliseconds.
- `get(key)`: Returns the value if it exists and is not expired, otherwise returns `-1`.
- `count()`: Returns the number of unexpired keys in the cache.

---

## 🧠 Intuition

### 🔥 What is a Cache?

A **cache** is a temporary data store used to quickly retrieve frequently accessed values.

### 🔥 What is a Cache with a Time Limit?

- Unlike a normal cache, **each key in this cache expires after a certain duration**.
- The cache should **automatically remove expired keys**.

🔹 **Key Challenges:**

- Efficiently store and manage expiration times.
- Handle duplicate keys by updating values and refreshing the expiration.
- Keep track of unexpired keys dynamically.

---

## 💡 Approach

### **1️⃣ Using JavaScript Objects and `setTimeout()`**

To implement a **cache with time limits**, we use an **object** to store key-value pairs and a **timeout** to track expiration.

🔹 **Steps to Implement:**

- Store key-value pairs **along with a reference to a timeout function**.
- When a key is set, start a **`setTimeout()`** to delete it after `duration` milliseconds.
- If the key already exists, **reset the timer** and update the value.
- Use `Object.keys()` to count the number of unexpired keys.

---

## ✅ Solution Code

```javascript
var TimeLimitedCache = function () {
  this.cache = {};
};

/**
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isKey = this.cache[key];

  if (isKey) {
    this.cache[key].value = value;
    this.cache[key].duration = duration;
    clearTimeout(this.cache[key].ref);
  } else {
    this.cache[key] = { value, duration };
  }
  this.cache[key].ref = setTimeout(() => delete this.cache[key], duration);

  return Boolean(isKey);
};

/**
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function (key) {
  let isKey = this.cache[key];
  return isKey ? isKey.value : -1;
};

/**
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */
```

---

## ⏳ Complexity Analysis

- **Time Complexity:**

  - `set()` → **O(1)** (Updating an object key and setting a timeout are constant-time operations).
  - `get()` → **O(1)** (Direct object lookup).
  - `count()` → **O(n)** (Counting object keys).

- **Space Complexity:**
  - **O(n)** (Each key-value pair requires additional memory for tracking expiration).

---

## 📚 Key Concepts to Learn

✅ **JavaScript Objects** for efficient key-value storage.  
✅ **setTimeout & clearTimeout** for handling time-based expiration.  
✅ **Boolean Conversions (`Boolean(isKeyPresent)`)** for return values.  
✅ **Efficient Object Operations (`Object.keys()`)** for cache management.

---

## 🚀 Best Practices for Implementing a Cache

🔹 **Use JavaScript Objects for Fast Lookup.**  
🔹 **Handle Expiration Efficiently Using `setTimeout()`.**  
🔹 **Optimize `count()` to Track Expired Keys Dynamically.**

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2622. Cache With Time Limit - Solution](https://leetcode.com/problems/cache-with-time-limit/solutions/6600222/2622-leetcode-cache-with-time-limit-solu-srwq)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
