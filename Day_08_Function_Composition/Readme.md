# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 08: Function Composition

## 📌 Problem Statement

**LeetCode Problem:** [`Function Composition`](https://leetcode.com/problems/function-composition/description)

📌 **Description:**  
Implement a function `compose` that takes an array of functions and returns a new function. When the returned function is called with a value, it applies the functions from **right to left** (i.e., the last function in the array is executed first).

---

## 🧠 Intuition

The problem requires us to chain multiple functions together and execute them in **reverse order**. This means we need to iterate over the functions from the last index to the first, applying each function to the accumulated result.

---

## 💡 Approach

### 🔹 **Approach 1: Using a `for` Loop (Best & Optimized)**

```javascript
var compose = (functions) => (x) => {
  for (let i = functions.length - 1; i >= 0; i--) {
    x = functions[i](x);
  }
  return x;
};
```

📌 **Explanation:**

- We define `compose` as a **higher-order function** that accepts an array of functions.
- It returns another function that takes an argument `x`.
- A `for` loop iterates through `functions` **from right to left**.
- Each function is applied sequentially, updating `x` at every step.
- **This approach is efficient and clean.**

---

### 🔹 **Approach 2: Using an Explicit Function Return**

```javascript
var compose = function (functions) {
  return function (x) {
    let val = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      val = functions[i](val);
    }
    return val;
  };
};
```

📌 **Differences from Approach 1:**

- Uses a standard function declaration instead of an arrow function.
- Stores `x` in a variable `val` before applying transformations.
- **This approach improves readability** while maintaining the same logic.

---

## ⏳ Complexity Analysis

- **Time Complexity:**
  - $$O(n)$$ → We iterate through the array once, applying each function.
- **Space Complexity:**
  - $$O(1)$$ → No extra space is used apart from a few variables.

---

## ✅ Solution Code

```javascript
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = (functions) => (x) => {
  for (let i = functions.length - 1; i >= 0; i--) {
    x = functions[i](x);
  }
  return x;
};

/**
 * const fn = compose([x => x + 1, x => x * 2]);
 * console.log(fn(4)); // Output: 9
 */
```

---

## 📚 Important Topics to Learn

- **Higher-Order Functions**: Functions that take or return other functions.
- **Function Composition**: Combining multiple functions to apply transformations in sequence.
- **Array Iteration**: Using loops effectively for processing arrays.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Function Composition - Solution`](https://leetcode.com/problems/function-composition/solutions/6565805/2629-function-composition-leetcode-solut-x67u)

---

## 🚀 Support & Feedback

✅ If you found this helpful, **give it a ⭐ on GitHub!**  
💬 Let’s discuss alternative solutions & improvements! 🚀
