# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 27: Compact Object

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2705. Compact Object](https://leetcode.com/problems/compact-object/description/)

📌 **Description:**  
Write a function `compactObject(obj)` that recursively removes all **falsy values** (`false`, `null`, `0`, `""`, `undefined`, `NaN`) from a JavaScript object or array while maintaining the original structure.

- Works on **objects** and **arrays**.
- Must preserve structure while removing **falsy values** deeply.
- If `obj` is not an object or array, return it as is.

---

## 🧠 Intuition

### 🔥 What is Recursive Compaction?

This problem teaches us how to **deeply traverse nested objects/arrays** and remove **falsy values** at every level, while preserving the structure.

🔹 **In this case:**  
We need to check:

- If it's an array, **filter falsy values** and apply the function recursively.
- If it's an object, **build a new object**, only keeping keys with **truthy values**.
- If it’s a primitive value, **return it directly**.

🔹 **Examples:**

| Input                                 | Output              |
| ------------------------------------- | ------------------- |
| `{"a": null, "b": [false, 1]}`        | `{"b": [1]}`        |
| `[null, 0, [false, [true]]]`          | `[[[true]]]`        |
| `{"x": {"y": 0, "z": [1, "", null]}}` | `{"x": {"z": [1]}}` |

---

## 💡 Approach

### **Approach: Recursive Traversal with Boolean Filtering**

```js
var compactObject = function (obj) {
  if (obj === null || typeof obj !== "object") return obj;
  if (Array.isArray(obj)) return obj.filter(Boolean).map(compactObject);
  let newObj = {};
  for (let key in obj) {
    const value = compactObject(obj[key]);
    if (Boolean(value)) newObj[key] = value;
  }
  return newObj;
};
```

✅ **Pros:**

- Elegant and recursive.
- Uses `filter(Boolean)` to clean arrays efficiently.
- Works for deeply nested structures.
- Handles both arrays and objects in one function.

---

## ⏳ Complexity Analysis

| Operation            | Time Complexity | Space Complexity |
| -------------------- | --------------- | ---------------- |
| Recursive Compaction | **O(n)**        | **O(d)**         |

Where `n` is the total number of elements and `d` is the max depth of nesting.

---

## 📚 Key Concepts to Learn

✅ **Falsy Values in JavaScript** – Understand what values are evaluated as `false`.  
✅ **Recursion** – Traverse complex structures like trees/objects.  
✅ **Array.filter(Boolean)** – Removes all falsy values from an array.  
✅ **Object Traversal** – Using `for...in` to iterate keys.  
✅ **Type Checking** – Use `Array.isArray()` and `typeof` to branch logic.

---

## 🚀 Best Practices for Recursive Filtering

🔹 Handle `null` and primitive values at the top.  
🔹 Always check if value is truthy before inserting into the result.  
🔹 Use `map()` after filtering to maintain structure.  
🔹 Prefer recursion for cleaner handling of nested data.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2705. Compact Object - Solution](https://leetcode.com/problems/compact-object/solutions/6637307/2705-compact-object-solution-by-runl4avd-jfum)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 Have ideas for improvement or other cool tricks?  
Let’s connect — drop your suggestions or PRs and let’s grow together! 🚀🔥

---
