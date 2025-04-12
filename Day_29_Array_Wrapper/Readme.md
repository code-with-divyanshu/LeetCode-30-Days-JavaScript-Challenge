# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 29: Array Wrapper

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2695. Array Wrapper](https://leetcode.com/problems/array-wrapper/description/)

📌 **Description:**  
Design a class `ArrayWrapper` that wraps an array and enables custom behavior for:

- Arithmetic operations like `obj1 + obj2`
- String conversion like `String(obj1)`

---

## 🧠 Intuition

### 🔎 What’s Special About This?

This challenge is about **object coercion** in JavaScript — how objects behave when converted into **primitive values** (like numbers or strings).

JavaScript provides two powerful built-in methods for controlling this:

- `valueOf()` → invoked when an object is used in arithmetic (`+`, `-`, etc.)
- `toString()` → invoked when an object is used as a string

We need to use both to make the class act like a primitive when needed.

---

## 💡 Approach

### **Constructor Function + Prototype Methods**

```js
var ArrayWrapper = function (nums) {
  this.nums = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.nums.reduce((prev, curr) => prev + curr, 0);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.nums);
};
```

✅ **Explanation:**

- The `valueOf()` method enables us to define how two `ArrayWrapper` objects behave during numeric operations like `+`. It returns the **sum of the array**.
- The `toString()` method enables us to define how the object appears when converted to a string, using `JSON.stringify()`.

---

## ⏳ Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| valueOf   | **O(n)**        | **O(1)**         |
| toString  | **O(n)**        | **O(n)**         |

---

## 📚 Key Concepts to Learn

✅ **Object Coercion in JavaScript** – Defining behavior of objects as primitives  
✅ **valueOf()** – Used for arithmetic expression evaluation  
✅ **toString()** – Used for string conversion (`String(obj)`)  
✅ **Constructor Function & Prototypes** – Memory-efficient method sharing  
✅ **Array reduce()** – For summing elements

---

## 🚀 Pro Tips

🔹 Avoid placing heavy logic inside `valueOf()`/`toString()` if used frequently  
🔹 Always test edge cases like empty arrays  
🔹 Prefer `prototype` methods when creating multiple instances

---

## 🔗 Solution Discussion

Check out my full solution and discussion on LeetCode:  
👉 [2695. Array Wrapper - Solution](https://leetcode.com/problems/array-wrapper/solutions/6643418/2695-array-wrapper-solution-by-runl4avdw-quby)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **drop a star⭐ or follow for more clean JavaScript solutions!**  
💡 Got suggestions or wanna share your version? PRs are welcome! Let’s grow together 🚀

---
