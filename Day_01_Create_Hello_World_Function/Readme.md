# LeetCode - 30 Days JavaScript Challenge

## 📅 Day 1: Create Hello World Function

## 🚀 Problem Statement

**LeetCode Problem:** [`Create Hello World Function`](https://leetcode.com/problems/create-hello-world-function/description/)

📌 **Description:**
Write a function that **always returns the string "Hello World"**, regardless of the input.

### ✍️ Example:

```js
const f = createHelloWorld();
f(); // "Hello World"
```

---

## 🧠 Intuition

The problem is straightforward—we need a function that **always** returns a fixed string. Since no input is required, we can simply return the string directly from the function.

---

## 💡 Approach

### 🔹 **Approach 1: Using Traditional Arrow Function**

```js
var createHelloWorld = function () {
  return (...args) => {
    return "Hello World";
  };
};
```

📌 **Explanation:**

- The function returns another arrow function.
- The returned function accepts any arguments (`...args`), but they are ignored.
- It always returns `"Hello World"`.

---

### 🔹 **Approach 2: Using Implicit Return (Cleaner Version)**

```js
var createHelloWorld = function () {
  return (...args) => "Hello World";
};
```

📌 **Key Improvement:**

- Removed `{}` and `return` for a **more concise** arrow function.
- It directly returns `"Hello World"`.

---

### 🔹 **Approach 3: Most Optimized One-Liner**

```js
var createHelloWorld =
  () =>
  (...args) =>
    "Hello World";
```

📌 **Why is this better?**

- Uses **nested arrow functions** for a **one-liner solution**.
- No function keyword, no return statement – just **pure functional simplicity!**

---

## ⏳ Complexity Analysis

- **Time Complexity:** $$O(1)$$ Always returns in constant time.
- **Space Complexity:** $$O(1)$$ → No extra space used.

---

## ✅ Solution Code

```javascript
/**
 * @return {Function}
 */
var createHelloWorld =
  () =>
  (...args) =>
    "Hello World";

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */
```

---

## 📚 Important Topics to Learn

- **Higher-Order Functions**: Functions returning other functions.
- **Arrow Functions**: Writing concise JavaScript functions.
- **Closures**: Functions retaining access to their outer scope.

---

## 🔗 Solution Discussion

Check out my solution on LeetCode: [`Create Hello World Function - Solution`](https://leetcode.com/problems/create-hello-world-function/solutions/6538756/leetcode-create-hello-world-function)

---

## 🚀 Support & Feedback

✅ Found this helpful? **Give it a ⭐ on GitHub!**
💬 Let’s discuss alternative solutions & improvements! 🚀
