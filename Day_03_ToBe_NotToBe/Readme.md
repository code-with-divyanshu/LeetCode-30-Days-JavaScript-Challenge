# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 2: – To Be or Not To Be

## 📌 Problem Statement

**LeetCode Problem:** [`To Be or Not To Be`](https://leetcode.com/problems/to-be-or-not-to-be/description/)

📌 **Description:**
Create a function `expect` that takes a value and returns an object with two methods:

- `toBe(otherVal)`: Returns `true` if `val === otherVal`, otherwise throws an error **"Not Equal"**.
- `notToBe(otherVal)`: Returns `true` if `val !== otherVal`, otherwise throws an error **"Equal"**.

---

## 🧠 Intuition

The problem requires us to create a function that returns an object with two methods for value comparisons. This involves understanding **closures**, **higher-order functions**, and **error handling** in JavaScript.

---

## 💡 Approach

### 🔹 **Approach 1: Using Object Methods**

```javascript
var expect = function (val) {
  return {
    toBe: function (otherVal) {
      if (val === otherVal) {
        return true;
      }
      throw new Error("Not Equal");
    },

    notToBe: function (otherVal) {
      if (val !== otherVal) {
        return true;
      }
      throw new Error("Equal");
    },
  };
};
```

📌 **Explanation:**

- Returns an object with `toBe` and `notToBe` methods.
- Uses traditional function syntax for better readability.
- Throws an error when conditions are not met.

---

### 🔹 **Approach 2: Using Arrow Functions**

```javascript
var expect = function (val) {
  return {
    toBe: (otherVal) => {
      if (val === otherVal) return true;
      throw new Error("Not Equal");
    },

    notToBe: (otherVal) => {
      if (val !== otherVal) return true;
      throw new Error("Equal");
    },
  };
};
```

📌 **Key Improvement:**

- Uses arrow functions for concise syntax.
- Reduces boilerplate while maintaining clarity.

---

### 🔹 **Approach 3: Optimized One-Liner Using Immediately Invoked Function Expressions (IIFE)**

```javascript
var expect = function (val) {
  return {
    toBe: (otherVal) =>
      val === otherVal
        ? true
        : (() => {
            throw new Error("Not Equal");
          })(),
    notToBe: (otherVal) =>
      val !== otherVal
        ? true
        : (() => {
            throw new Error("Equal");
          })(),
  };
};
```

📌 **Why is this better?**

- Uses **nested arrow functions** for a **one-liner solution**.
- Improves readability by eliminating `if` statements.
- Uses **IIFE (Immediately Invoked Function Expressions)** to handle errors concisely.

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(1)$$ → Each operation runs in constant time.
- **Space Complexity:** $$O(1)$$ → No extra space is used.

---

## ✅ Solution Code

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
var expect = function (val) {
  return {
    toBe: (otherVal) =>
      val === otherVal
        ? true
        : (() => {
            throw new Error("Not Equal");
          })(),
    notToBe: (otherVal) =>
      val !== otherVal
        ? true
        : (() => {
            throw new Error("Equal");
          })(),
  };
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
```

---

## 📚 Important Topics to Learn

- **Higher-Order Functions**: Functions that return objects with methods.
- **Arrow Functions**: Writing concise JavaScript functions.
- **Closures**: Functions retaining access to their outer scope.
- **Error Handling**: Using `throw new Error()` for exceptions.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`To Be or Not To Be - Solution`](https://leetcode.com/problems/to-be-or-not-to-be/solutions/6547374/leetcode-to-be-or-not-to-be)

---

## 🚀 Support & Feedback

✅ Found this helpful? **Give it a ⭐ on GitHub!**
💬 Let’s discuss alternative solutions & improvements! 🚀
