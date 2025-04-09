# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 26: Flatten Deeply Nested Array

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2625. Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array/description/)

📌 **Description:**  
Given a deeply nested array and a depth level `n`, we are to flatten the array **up to `n` levels deep**. Flattening means reducing the nesting of arrays by extracting inner elements.

- If `n === 0`, return the original array.
- If `n > 0`, flatten the nested arrays up to that depth.
- Do not completely flatten the array unless `n` is high enough.

---

## 🧠 Intuition

### 🔥 What is Controlled Flattening?

This problem teaches how to **recursively traverse arrays**, and **flatten elements** based on the remaining depth allowed (`n`). Unlike full flattening, here we stop **once the specified depth is reached**.

🔹 **In this case:**  
We use a recursive approach that checks whether the current element is an array:

- If it is, and depth allows, **flatten it recursively**.
- If not, **keep the element as is**.

🔹 **Examples:**

| Input `arr`           | Depth `n` | Output            |
| --------------------- | --------- | ----------------- |
| `[1,[2],[3,[4]]]`     | `1`       | `[1,2,3,[4]]`     |
| `[1,[2,[3,[4,[5]]]]]` | `2`       | `[1,2,3,[4,[5]]]` |
| `[1,[2,[3,[4,[5]]]]]` | `10`      | `[1,2,3,4,5]`     |

---

## 💡 Approach

### **Approach: Recursive Flattening with Depth Check**

```js
var flat = function (arr, n) {
  let newArr = [];

  if (n === 0) return arr;

  arr.forEach((ele) => {
    if (Array.isArray(ele)) {
      newArr.push(...flat(ele, n - 1));
    } else {
      newArr.push(ele);
    }
  });

  return newArr;
};
```

✅ **Pros:**

- Simple recursion handles depth naturally.
- Only flattens up to required levels.
- Clean and concise use of `Array.isArray()` and spread operator.

---

## ⏳ Complexity Analysis

| Operation            | Time Complexity | Space Complexity |
| -------------------- | --------------- | ---------------- |
| Recursive Flattening | **O(n)**        | **O(n)**         |

Where `n` is the total number of elements, including nested ones.

---

## 📚 Key Concepts to Learn

✅ **Recursion** – Essential for breaking down nested structures.  
✅ **Array Traversal (`forEach`)** – Iterating over elements.  
✅ **Spread Operator (`...`)** – Merging inner results cleanly.  
✅ **Array.isArray()** – Used to detect nested arrays.  
✅ **Depth Control in Recursion** – Managing when to stop recursion.

---

## 🚀 Best Practices for Flattening

🔹 Always check depth before recursing.  
🔹 Avoid over-flattening by returning original array at `n === 0`.  
🔹 Use spread syntax to merge nested flattened arrays.  
🔹 Prefer recursion for elegant nested processing.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2625. Flatten Deeply Nested Array - Solution](https://leetcode.com/problems/flatten-deeply-nested-array/solutions/6630702/2625-flatten-deeply-nested-array-depth-based-js-recursion/)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 Have a more optimized or iterative approach?  
Let’s connect — drop your suggestions or PRs and let’s grow together! 🚀🔥

---
