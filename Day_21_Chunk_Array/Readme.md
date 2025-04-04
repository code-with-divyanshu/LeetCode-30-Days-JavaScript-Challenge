# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 21: Chunk Array

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2677. Chunk Array](https://leetcode.com/problems/chunk-array/description)

📌 **Description:**  
We need to implement a function `chunk(arr, size)` that **divides the input array** into chunks of a specified size and returns them as a nested array.

- If the array cannot be split evenly, the final chunk will contain the remaining elements.
- The input `arr` is an array, and `size` is a positive integer.

---

## 🧠 Intuition

### 🔥 What is Array Chunking?

Array chunking is a method where we **split an array into multiple subarrays** (chunks) of equal length. This is especially useful in **pagination**, **batch processing**, or when splitting work across different threads or services.

🔹 **Examples:**

| Input             | Size | Output                  |
| ----------------- | ---- | ----------------------- |
| `[1, 2, 3, 4, 5]` | 2    | `[[1, 2], [3, 4], [5]]` |
| `[1, 2, 3, 4]`    | 4    | `[[1, 2, 3, 4]]`        |
| `[]`              | 3    | `[]`                    |

---

## 💡 Approach

### **Approach 1: Using `slice()` with a `for` loop**

```js
var chunk = function (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
```

✅ **Pros:**

- Clean and readable.
- Utilizes built-in `slice()` for elegant chunk creation.
- Easy to understand and implement.

---

### **Approach 2: Two pointers with `while` loop**

```js
var chunk = function (arr, size) {
  let result = [];
  let i = 0;
  let j = size;
  while (i < arr.length) {
    result.push(arr.slice(i, j));
    i += size;
    j += size;
  }
  return result;
};
```

✅ **Pros:**

- Pointer-style logic is helpful for those familiar with sliding windows or ranges.
- Easy to adapt for more complex scenarios.

---

### **Approach 3: Nested loop without slice()**

```js
var chunk = function (arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i += size) {
    let newArr = [];
    for (let j = i; j < arr.length; j++) {
      if (j < i + size) {
        newArr.push(arr[j]);
      }
    }
    result.push(newArr);
  }
  return result;
};
```

✅ **Pros:**

- Manual control of how elements are pushed into each chunk.
- Helpful when needing to apply custom logic during chunk formation.

---

## ⏳ Complexity Analysis

| Approach       | Time Complexity | Space Complexity |
| -------------- | --------------- | ---------------- |
| All Approaches | **O(n)**        | **O(n)**         |

- We visit every element in the array once.
- Space is used to store the result array containing chunks.

---

## 📚 Key Concepts to Learn

✅ **Array slicing (`slice`)** – Extracting parts of arrays efficiently.  
✅ **Two-pointer iteration** – Using start and end pointers to manage ranges.  
✅ **Nested iteration** – Manual chunk creation with controlled conditions.  
✅ **Modular thinking** – Breaking a large problem into smaller chunks (literally!).

---

## 🚀 Best Practices for Chunking Arrays

🔹 **Use `slice()` if performance and readability are priorities**.  
🔹 **Use nested loops when you want full control** over each chunk’s formation.  
🔹 **Always handle edge cases**, like empty arrays or size greater than array length.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2677. Chunk Array - My JavaScript Solution](https://leetcode.com/problems/chunk-array/solutions/6614793/2677-chunk-array-solution-by-runl4avdwj-a15u)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 **Have a different approach? Found a bug?**  
Let’s discuss and improve the solution together! Drop your thoughts below. 🚀🔥
