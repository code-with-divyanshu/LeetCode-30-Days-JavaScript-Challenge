# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 30: Calculator with Method Chaining

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining/description/)

📌 **Description:**  
Design a class `Calculator` that supports method chaining for the following operations:

- `add(value)` → Adds the value to the current result.
- `subtract(value)` → Subtracts the value from the current result.
- `multiply(value)` → Multiplies the value with the current result.
- `divide(value)` → Divides the current result by the value.
- `power(value)` → Raises the current result to the power of the given value.
- `getResult()` → Returns the current result.

---

## 🧠 Intuition

### 🔎 What’s Special About This?

This challenge is about **method chaining**, a powerful technique in object-oriented programming where multiple methods are called in a single line, allowing for cleaner and more readable code.

- We need to ensure each method updates the internal state (`res`) and returns the `Calculator` instance (`this`) for chaining subsequent methods.

---

## 💡 Approach

### **Constructor Function + Method Chaining**

```js
class Calculator {
  constructor(value = 0) {
    this.res = value;
  }

  add(value) {
    this.res += value;
    return this;
  }

  subtract(value) {
    this.res -= value;
    return this;
  }

  multiply(value) {
    this.res *= value;
    return this;
  }

  divide(value) {
    if (value === 0) throw new Error("Cannot divide by 0");
    this.res /= value;
    return this;
  }

  power(value) {
    this.res **= value;
    return this;
  }

  getResult() {
    return this.res;
  }
}
```

✅ **Explanation:**

- **Constructor:** Initializes the `res` property with the given initial value (`0` by default).
- **add(), subtract(), multiply(), divide():** These methods perform the respective arithmetic operations and return the `Calculator` instance (`this`) to allow method chaining.
- **getResult():** Returns the final computed result.

---

## ⏳ Complexity Analysis

| Operation | Time Complexity | Space Complexity |
| --------- | --------------- | ---------------- |
| add       | **O(1)**        | **O(1)**         |
| subtract  | **O(1)**        | **O(1)**         |
| multiply  | **O(1)**        | **O(1)**         |
| divide    | **O(1)**        | **O(1)**         |
| power     | **O(1)**        | **O(1)**         |
| getResult | **O(1)**        | **O(1)**         |

---

## 📚 Key Concepts to Learn

✅ **Method Chaining** – Calling multiple methods on a single object in a fluent style  
✅ **Object-Oriented Programming** – Using classes and instances to encapsulate behavior  
✅ **Error Handling** – Using `throw` to handle edge cases like division by zero  
✅ **JavaScript Classes** – Defining classes and methods in JavaScript

---

## 🚀 Pro Tips

🔹 Make sure to handle edge cases like division by zero or invalid operations.  
🔹 Always return the object itself (`this`) for chaining methods.  
🔹 Use default values to ensure methods work seamlessly with or without arguments.

---

## 🔗 Solution Discussion

Check out my full solution and discussion on LeetCode:  
👉 [Calculator with Method Chaining - Solution](https://leetcode.com/problems/calculator-with-method-chaining/solutions/6645988/2726-calculator-with-method-chaining-sol-asjz)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **drop a star⭐ or follow for more clean JavaScript solutions!**  
💡 Got suggestions or wanna share your version? PRs are welcome! Let’s grow together 🚀

---
