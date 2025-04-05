# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 22: Array Prototype Last

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2619. Array Prototype Last](https://leetcode.com/problems/array-prototype-last/description/)

📌 **Description:**  
We need to implement a method `Array.prototype.last()` that returns the **last element of an array**, or `-1` if the array is empty.

- The method should be available on all array instances.
- Must not modify the original array.
- Works with any data type stored inside the array.

---

## 🧠 Intuition

### 🔥 What is Prototype Modification?

JavaScript allows us to **extend built-in types like `Array`** by modifying their prototype. This is useful when we want to add utility functions that can be reused across all instances of that type.

🔹 **In this case:**  
We are adding a custom method `last()` to the Array prototype so that we can call it directly on any array.

🔹 **Examples:**

| Input        | Output |
| ------------ | ------ |
| `[1, 2, 3]`  | `3`    |
| `[]`         | `-1`   |
| `['a', 'b']` | `'b'`  |

---

## 💡 Approach

### **Approach 1: Using Ternary Operator and Length Check**

```js
/**
 * @return {null|boolean|number|string|Array|Object}
 */
Array.prototype.last = function () {
  return this.length ? this[this.length - 1] : -1;
};

/**
 * const arr = [1, 2, 3];
 * arr.last(); // 3
 */
```

✅ **Pros:**

- Clean and minimal code.
- Uses the ternary operator for readability.
- Leverages the array’s `length` to check for existence.

---

## ⏳ Complexity Analysis

| Operation        | Time Complexity | Space Complexity |
| ---------------- | --------------- | ---------------- |
| Access last item | **O(1)**        | **O(1)**         |

- We’re simply accessing the last index, so no iteration required.
- No additional space is used beyond a few variables.

---

## 📚 Key Concepts to Learn

✅ **Prototype Inheritance** – Extending JavaScript built-in types like `Array`.  
✅ **Ternary Operator** – Conditionally return values in a single line.  
✅ **Array Indexing** – Understanding `length - 1` access.  
✅ **Edge Case Handling** – Return fallback value for empty arrays.

---

## 🚀 Best Practices for Extending Prototypes

🔹 **Avoid modifying prototypes in production code** unless you control the entire environment.  
🔹 Useful in personal utilities, libraries, or coding challenges.  
🔹 Always check for conflicts with existing or future native methods.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2619. Array Prototype Last - Solution](https://leetcode.com/problems/array-prototype-last/solutions/6618806/2619-array-prototype-last-solution-by-ru-08eg)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥

---
