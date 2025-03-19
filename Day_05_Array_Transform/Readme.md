# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 5: Apply Transform Over Each Element in Array

## 📌 Problem Statement

**LeetCode Problem:** [`Apply Transform Over Each Element in Array`](https://leetcode.com/problems/apply-transform-over-each-element-in-array/)

📌 **Description:**  
Implement a function `map` that applies a given function to each element in an array and returns a new transformed array.

---

## 🧠 Intuition

The problem requires iterating through an array and applying a transformation function to each element. This can be achieved using a simple loop and function execution.

---

## 💡 Approach

### 🔹 **Approach 1: Using Index-Based Assignment**

```javascript
var map = (arr, fn) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
```

📌 **Explanation:**

- We create an empty array `newArr`.
- We iterate through the input array `arr`.
- At each index, we apply `fn(arr[i], i)` and store the result in `newArr[i]`.
- Finally, we return `newArr`.

---

### 🔹 **Approach 2: Using `push()` Method**

```javascript
var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};
```

📌 **What’s Different?**

- Instead of directly assigning values to indices, we use the `push()` method.
- The logic remains the same but allows dynamic array growth.

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(n)$$ → We iterate through the array once, applying the function to each element.
- **Space Complexity:** $$O(n)$$ → A new array of the same size as the input array is created.

---

## ✅ Solution Code

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(fn(arr[i], i));
  }
  return newArr;
};

/**
 * const result = map([1,2,3], (x) => x * 2);
 * console.log(result); // [2, 4, 6]
 */
```

---

## 📚 Important Topics to Learn

- **Higher-Order Functions**: Functions that take other functions as arguments.
- **Array Iteration**: Using loops to traverse arrays.
- **Function Application**: Passing and executing functions dynamically.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Apply Transform Over Each Element in Array - Solution`](https://leetcode.com/problems/apply-transform-over-each-element-in-array/solutions/6555654/leetcode-apply-transform-over-each-eleme-avdt)

---

## 🚀 Support & Feedback

✅ Found this helpful? **Give it a ⭐ on GitHub!**  
💬 Let’s discuss alternative solutions & improvements! 🚀
