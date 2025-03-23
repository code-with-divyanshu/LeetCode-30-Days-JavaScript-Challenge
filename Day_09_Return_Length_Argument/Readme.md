### **GitHub - LeetCode 30 Days JavaScript Challenge**

## 📅 **Day 09: Return Length of Arguments Passed**

## 📌 **Problem Statement**

**LeetCode Problem:** [`Return Length of Arguments Passed`](https://leetcode.com/problems/return-length-of-arguments-passed/description/)

📌 **Description:**  
Implement a function `argumentsLength` that returns the number of arguments passed to it.

---

## 🧠 **Intuition**

The problem requires us to count the number of arguments a function receives. In JavaScript, we can handle an arbitrary number of arguments using the **rest parameter (`...args`)**, which stores all arguments as an array. Using its `.length` property, we can efficiently determine the count.

---

## 💡 **Approach**

### 🔹 **Approach 1: Using `Rest Parameters` (Best & Optimized)**

```javascript
var argumentsLength = function (...args) {
  return args.length;
};
```

📌 **Explanation:**

- The **rest parameter** (`...args`) collects all function arguments into an **array**.
- We simply return `args.length`, which provides the count of arguments passed.
- This approach is **efficient and clean** since it directly leverages built-in JavaScript functionality.

---

### 🔹 **Approach 2: Using a `for` Loop**

```javascript
var argumentsLength = function (...args) {
  let count = 0;
  for (let i = 0; i < args.length; i++) {
    count++;
  }
  return count;
};
```

📌 **Explanation:**

- We initialize `count` to 0.
- The `for` loop iterates through each argument in `args`, incrementing `count` at each step.
- Finally, `count` is returned as the total number of arguments received.

📌 **Why use this approach?**  
While not as concise as the first approach, it **demonstrates iteration** and how arguments can be counted manually.

---

![alt text](image.png)

---

## ⏳ **Complexity Analysis**

- **Time Complexity:**
  - $$O(1)$$ → Accessing `.length` is a constant-time operation.
- **Space Complexity:**
  - $$O(1)$$ → We only use a single variable for counting.

---

## ✅ **Solution Code**

```javascript
/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
  return args.length;
};

/**
 * argumentsLength(1, 2, 3); // Output: 3
 */
```

---

## 📚 **Important Topics to Learn**

- **Rest Parameters (`...args`)**: How functions can accept a variable number of arguments.
- **Function Arguments Handling**: Understanding how JavaScript functions process inputs.
- **Looping Mechanisms**: Iterating through function arguments when necessary.

---

## 🔗 **Solution Discussion**

Check out my solution on LeetCode: [`Return Length of Arguments Passed - Solution`](https://leetcode.com/problems/return-length-of-arguments-passed/solutions/6569281/2703-leetcode-return-length-of-arguments-x33g)

---

## 🚀 **Support & Feedback**

✅ If you found this helpful, **give it a ⭐ on GitHub!**  
💬 Let’s discuss alternative solutions & improvements! 🚀
