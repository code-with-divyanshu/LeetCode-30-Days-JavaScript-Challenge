# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 20: Is Object Empty

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2727. Is Object Empty](https://leetcode.com/problems/is-object-empty/description)

📌 **Description:**  
We need to implement a function `isEmpty(obj)`, which checks if the given object **has no properties**.

- If the object is **empty**, return `true`.
- If it has **at least one property**, return `false`.

---

## 🧠 Intuition

### 🔥 How Do We Define an "Empty" Object?

An object is considered **empty** if it **does not have any keys** or properties.

🔹 **Examples:**

| Object         | Expected Output                           |
| -------------- | ----------------------------------------- |
| `{}`           | ✅ `true` (empty)                         |
| `{ a: 1 }`     | ❌ `false` (not empty)                    |
| `new Object()` | ✅ `true` (empty)                         |
| `null`         | ❌ `false` (not an object)                |
| `[]`           | ❌ `false` (arrays are not empty objects) |

---

## 💡 Approach

### **Approach 1: Using `JSON.stringify()`**

📌 **Steps:**

1. Convert the object into a **JSON string** using `JSON.stringify(obj)`.
2. An **empty object `{}`** is represented as `"{}"` (length = 2).
3. If the **length is ≤ 2**, return `true` (empty); otherwise, return `false`.

```js
var isEmpty = function (obj) {
  return JSON.stringify(obj).length <= 2 ? true : false;
};
```

✅ **Pros:**

- Simple and easy to understand.

🚫 **Cons:**

- **Inefficient for large objects** (JSON conversion is expensive).
- **Fails for non-object types** (e.g., `null`, `[]`).

---

### **Approach 2: Using `Object.keys()` (Efficient & Recommended)**

📌 **Steps:**

1. Use `Object.keys(obj)` to get an array of an object's **own enumerable properties**.
2. If the **length of the array is `0`**, the object is **empty**.
3. Use `!Object.keys(obj).length` to return a boolean result.

```js
var isEmpty = function (obj) {
  return !Object.keys(obj).length;
};
```

✅ **Pros:**

- **More efficient** than `JSON.stringify()`.
- **Recommended for real-world applications**.
- **Handles edge cases better** (avoids unnecessary string conversion).

🚫 **Cons:**

- ❌ **Doesn't check for inherited properties** (only own properties).

---

## ⏳ Complexity Analysis

| Approach           | Time Complexity                               | Space Complexity |
| ------------------ | --------------------------------------------- | ---------------- |
| `JSON.stringify()` | **O(n)** (Converts entire object to a string) | **O(n)**         |
| `Object.keys()`    | **O(1)** (Retrieves only the keys)            | **O(1)**         |

---

## 📚 Key Concepts to Learn

✅ **Object.keys()** – Retrieves an array of an object’s own properties.  
✅ **JSON.stringify()** – Converts an object to a JSON string (useful for debugging).  
✅ **Falsy values in JavaScript** – Understanding `!Object.keys(obj).length`.  
✅ **Performance Optimization** – Using the most efficient approach for large objects.

---

## 🚀 Best Practices for Checking Object Emptiness

🔹 **Prefer `Object.keys()` for efficiency** in real-world applications.  
🔹 **Use `JSON.stringify()` only for debugging or small objects**.  
🔹 **Consider `Object.entries()` or `Object.values()`** for alternative checks.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [2727. Is Object Empty - Solution](https://leetcode.com/problems/is-object-empty/solutions/6611583/2727-is-object-empty-solution-by-runl4av-43i9)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
