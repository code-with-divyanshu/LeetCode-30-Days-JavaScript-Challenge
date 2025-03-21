# **LeetCode - 30 Days JavaScript Challenge**

## 📅 **Day 7: Array Reduce Transformation**

### 📌 **Problem Statement**

**LeetCode Problem:** [`Array Reduce Transformation`](https://leetcode.com/problems/array-reduce-transformation/description/)

📌 **Description:**  
Implement a function `reduce(nums, fn, init)` that mimics the behavior of JavaScript's built-in `Array.prototype.reduce()` method.

---

## 🧠 **Intuition**

The problem requires applying a given function to all elements in an array, accumulating the result into a single value.

- We initialize a variable with `init`.
- Then, we iterate through the array, applying the function to update the accumulated value.
- Finally, we return the accumulated result.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `for` Loop**

```js
var reduce = function (nums, fn, init) {
  let val = init;
  for (let i = 0; i < nums.length; i++) {
    val = fn(val, nums[i]);
  }
  return val;
};
```

📌 **Explanation:**

- We initialize `val` with `init`.
- We iterate through `nums`, applying `fn(val, nums[i])` at each step.
- After completing all iterations, we return `val`.
- This is a **straightforward and readable** approach.

---

### 🔹 **Approach 2: Using `for` Loop with Direct Assignment**

```js
var reduce = (nums, fn, init) => {
  for (let i = 0; i < nums.length; i++) {
    init = fn(init, nums[i]);
  }
  return init;
};
```

📌 **Why is this different?**

- Instead of creating a separate variable, we directly update `init`.
- This makes the code **more concise and slightly optimized**.

---

### 🔹 **Approach 3: Using `forEach()` (Best & Optimized)**

```js
var reduce = (nums, fn, init) => {
  nums.forEach((val) => {
    init = fn(init, val);
  });
  return init;
};
```

📌 **Why is this better?**

- Uses JavaScript’s built-in **`forEach()`** method for iteration.
- **More readable** and eliminates the need for manual index handling.
- **Cleaner and more maintainable** solution.

---

## ⏳ **Complexity Analysis**

- **Time Complexity:** $$O(n)$$ → We iterate through the array once.
- **Space Complexity:** $$O(1)$$ → We use only a constant amount of extra space.

---

## ✅ **Solution Code**

```js
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = (nums, fn, init) => {
  nums.forEach((val) => {
    init = fn(init, val);
  });
  return init;
};

/**
 * Example Usage:
 * const nums = [1, 2, 3, 4];
 * function sum(accum, curr) { return accum + curr; }
 * console.log(reduce(nums, sum, 0)); // Output: 10
 */
```

---

## 📚 **Important Topics to Learn**

- **Higher-Order Functions**: Functions that take other functions as arguments (like `reduce`).
- **Iteration Methods**: Understanding `forEach()`, `reduce()`, `map()`, and `filter()` in JavaScript.
- **Callback Functions**: How functions can be passed as arguments and executed dynamically.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Array Reduce Transformation - Solution`](https://leetcode.com/problems/array-reduce-transformation/solutions/6562190/2626-array-reduce-transformation-leetcode-solution)

---

## 🚀 **Support & Feedback**

✅ If you found this helpful, **give it a ⭐ on GitHub!**  
💬 Let’s discuss alternative solutions & improvements! 🚀
