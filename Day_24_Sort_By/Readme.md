# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 24: Sort By

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2724. Sort By](https://leetcode.com/problems/sort-by/description/)

📌 **Description:**  
We need to implement a function `sortBy(arr, fn)` that sorts the elements of the array based on the result of applying a callback function `fn` to each element.

- The sorting should be done **in place** using JavaScript's built-in `sort()` method.
- The callback function determines how the elements should be compared.
- It should work with **numbers, strings, or objects**, depending on the return type of `fn`.

---

## 🧠 Intuition

### 🔥 What is Custom Sorting?

Sorting is the process of ordering data based on a comparison rule. In this problem, the rule is defined by the callback function `fn`.

🔹 **In this case:**  
We apply the function `fn` to each element and sort the array based on the resulting values.

🔹 **Examples:**

| Input            | Sort Function (`fn`) | Output           |
| ---------------- | -------------------- | ---------------- |
| `[3, 1, 2]`      | `x => x`             | `[1, 2, 3]`      |
| `['a', 'ab']`    | `x => x.length`      | `['a', 'ab']`    |
| `[{x:1}, {x:0}]` | `obj => obj.x`       | `[{x:0}, {x:1}]` |

---

## 💡 Approach

### **Approach 1: Numeric Sort Using Subtraction**

```js
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};
```

✅ **Pros:**

- Simple and clean.
- Works best when `fn()` returns numbers.
- Easy to read and fast to execute.

---

### **Approach 2: General Comparison Using Ternary**

```js
var sortBy = function (arr, fn) {
  return arr.sort((a, b) => (fn(a) > fn(b) ? 1 : -1));
};
```

✅ **Pros:**

- Works with both numbers and strings.
- Useful when `fn()` returns non-numeric values (e.g. strings or booleans).

---

## ⏳ Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| Sorting   | **O(n log n)**  | **O(1)**         |

- Uses built-in `.sort()` — optimized and efficient.
- Performs sorting in place.

---

## 📚 Key Concepts to Learn

✅ **Array.prototype.sort()** – Custom comparator functions.  
✅ **Callback Functions** – Deciding sort logic dynamically.  
✅ **Comparison Operators** – `-` for numeric sort, `>` and ternary for flexible comparison.  
✅ **Higher-Order Functions** – Functions that return or take functions.

---

## 🚀 Best Practices for `sortBy`

🔹 Use numeric subtraction (`fn(a) - fn(b)`) when working with numbers.  
🔹 Use ternary-based comparison for strings or complex types.  
🔹 Keep your comparator functions consistent and predictable.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2724. Sort By - Solution](https://leetcode.com/problems/sort-by/solutions/6625932/2724-sort-by-solution-by-runl4avdwj-vm0d)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 Got another approach? Discovered a bug?  
Let’s brainstorm and code together — drop your ideas below! 🚀🔥

---
