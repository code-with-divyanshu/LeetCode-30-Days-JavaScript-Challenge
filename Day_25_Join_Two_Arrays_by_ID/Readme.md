# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 25: Join Two Arrays by ID

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2722. Join Two Arrays by ID](https://leetcode.com/problems/join-two-arrays-by-id/description/)

📌 **Description:**  
We are given two arrays of objects, and we need to join them by the `id` key. If two objects have the same `id`, their properties must be merged into a **single object**, with properties from the second array **overriding** the ones from the first.

- The output should be an array of merged objects.
- Objects without a matching `id` in the other array should be included as they are.
- The final array should be sorted in **ascending order by `id`**.

---

## 🧠 Intuition

### 🔥 What is Key-Based Merging?

This is a common data operation where we merge datasets (arrays or objects) by matching on a shared **unique identifier** — like an `id`.

🔹 **In this case:**  
We want to combine the two arrays into a single list where entries with the same `id` are merged into one object, and duplicates are resolved by **overwriting with the latest** data.

🔹 **Examples:**

| Input `arr1`       | Input `arr2`       | Output                            |
| ------------------ | ------------------ | --------------------------------- |
| `[{"id":1,"x":1}]` | `[{"id":1,"y":2}]` | `[{"id":1,"x":1,"y":2}]`          |
| `[{"id":1,"x":1}]` | `[{"id":2,"y":2}]` | `[{"id":1,"x":1},{"id":2,"y":2}]` |

---

## 💡 Approach

### **Approach: Combine, Merge by ID, and Extract Values**

```js
var join = function (arr1, arr2) {
  let combineArr = arr1.concat(arr2);
  let res = {};

  combineArr.forEach((obj) => {
    let id = obj.id;
    if (!res[id]) {
      res[id] = { ...obj };
    } else {
      res[id] = { ...res[id], ...obj };
    }
  });

  return Object.values(res);
};
```

✅ **Pros:**

- Combines both arrays in one pass using `concat`.
- Uses a hash map (`res`) to merge by `id`.
- Final result is clean and easy to extract using `Object.values()`.

---

## ⏳ Complexity Analysis

| Operation    | Time Complexity | Space Complexity |
| ------------ | --------------- | ---------------- |
| Merge + Join | **O(n + m)**    | **O(n + m)**     |

- Efficiently combines arrays with a single pass.
- Hash map ensures constant time access for merging.

---

## 📚 Key Concepts to Learn

✅ **Array Concatenation (`concat`)** – Merging two arrays into one.  
✅ **Hash Map for Grouping** – Efficient lookup using keys like `id`.  
✅ **Spread Operator (`...`)** – Clean way to merge object properties.  
✅ **Object.values()** – Extract merged results from an object.  
✅ **Override Logic** – Right object data takes priority during merge.

---

## 🚀 Best Practices for Object Merging

🔹 Use `id` as a reliable unique key for grouping.  
🔹 When merging, prioritize order: `...existing, ...new` will override.  
🔹 Clean up result using `Object.values()` to get an array from object map.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode:  
👉 [2722. Join Two Arrays by ID - Solution](https://leetcode.com/problems/join-two-arrays-by-id/solutions/6629944/2722-join-two-arrays-by-id-solution-by-r-l8v0/)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 Got another approach? Want to optimize further?  
Let’s collaborate — drop your thoughts below and let’s grow together! 🚀🔥

---
