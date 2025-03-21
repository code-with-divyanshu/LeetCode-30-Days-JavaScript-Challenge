# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 6: Filter Elements from Array

## 📌 Problem Statement

**LeetCode Problem:** [`Filter Elements from Array`](https://leetcode.com/problems/filter-elements-from-array/description/)

📌 **Description:**  
Implement a function `filter` that removes elements from an array based on a given function and returns a new filtered array.

---

## 🧠 Intuition

The problem requires iterating through an array and applying a filtering function to each element. If the function returns `true`, the element is kept; otherwise, it is discarded.

---

## 💡 Approach

### 🔹 **Approach 1: Using `for` Loop**

```javascript
var filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
```

📌 **Explanation:**

- We create an empty array `newArr`.
- We iterate through `arr` using a `for` loop.
- At each index, we check if `fn(arr[i], i)` returns `true`.
- If `true`, we add `arr[i]` to `newArr`.
- Finally, we return `newArr`.

---

### 🔹 **Approach 2: Using `forEach()` (Best & Optimized)**

```javascript
var filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      newArr.push(value);
    }
  });
  return newArr;
};
```

📌 **Why is this better?**

- Uses **`forEach()`**, which is **more readable** and avoids manual index handling.
- Uses JavaScript’s **built-in array iteration methods**, which are optimized for performance.
- Results in **cleaner and more maintainable code**.

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(n)$$ → We iterate through the array once, applying the function to each element.
- **Space Complexity:** $$O(n)$$ → A new array is created to store filtered elements.

---

## ✅ Solution Code

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      newArr.push(value);
    }
  });
  return newArr;
};

/**
 * const result1 = filter([0, 10, 20, 30], function greaterThan10(n) {
    return n > 10;
    });
 * console.log(result1); // [ 20, 30 ]
 */
```

---

## 📚 Important Topics to Learn

- **Higher-Order Functions**: Functions that take other functions as arguments.
- **Array Iteration**: Using loops vs. built-in methods (`forEach`, `map`, `filter`).
- **Callback Functions**: How functions can be passed as arguments and executed inside other functions.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Filter Elements from Array - Solution`](https://leetcode.com/problems/filter-elements-from-array/solutions/6559186/leetcode-filter-elements-from-array)

---

## 🚀 Support & Feedback

✅ Found this helpful? **Give it a ⭐ on GitHub!**  
💬 Let’s discuss alternative solutions & improvements! 🚀
