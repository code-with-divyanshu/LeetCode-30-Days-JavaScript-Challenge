# 🚀 LeetCode - 30 Days JavaScript Challenge

## 📅 Day 28: Event Emitter

## 🔥 Problem Statement

🔗 **LeetCode Problem:** [2694. Event Emitter](https://leetcode.com/problems/event-emitter/description/)

📌 **Description:**  
Design a class `EventEmitter` that simulates an event system supporting the following methods:

- `subscribe(eventName, callback)` – Subscribes to an event and returns an `unsubscribe` method.
- `emit(eventName, args)` – Emits an event and calls all callbacks associated with it.

---

## 🧠 Intuition

### 🔔 What is an Event Emitter?

This pattern mimics the **Pub/Sub (Publish/Subscribe)** architecture, common in event-driven systems.  
It allows parts of your code to **react to events asynchronously**.

We need to:

- Store events and their corresponding listeners.
- Allow unsubscribing specific listeners.
- Return an array of results when emitting events.

📌 Real-world parallels:

- `addEventListener` and `removeEventListener` in the browser.
- `on` and `emit` in Node.js' `EventEmitter` class.

---

## 💡 Approach

### **Class-based Implementation with Callback Management**

```js
class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    const listeners = this.events[eventName];
    listeners.push(callback);

    return {
      unsubscribe: () => {
        let index = listeners.indexOf(callback);
        if (index !== -1) {
          listeners.splice(index, 1);
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events[eventName]) {
      return [];
    }

    return this.events[eventName].map((callback) => callback(...args));
  }
}
```

✅ **Key Points:**

- Listeners are stored as arrays under the event name key.
- The `unsubscribe()` function removes the exact callback instance.
- The `emit()` method invokes all listeners and collects their return values.

---

## ⏳ Complexity Analysis

| Operation   | Time Complexity | Space Complexity               |
| ----------- | --------------- | ------------------------------ |
| subscribe   | **O(1)**        | **O(1)**                       |
| emit        | **O(n)**        | **O(n)** (number of listeners) |
| unsubscribe | **O(n)**        | **O(1)**                       |

---

## 📚 Key Concepts to Learn

✅ **Event-driven programming** – Systems that respond to emitted signals.  
✅ **Closures in JavaScript** – `unsubscribe()` function captures `listeners`.  
✅ **Callback functions** – Dynamically assigned behaviors.  
✅ **Data structures** – Using objects and arrays to map events and listeners.  
✅ **Spread operator `...args`** – Forwarding arguments dynamically.

---

## 🚀 Best Practices for Custom Event Emitters

🔹 Avoid modifying the event-listener list while iterating.  
🔹 Ensure each listener can unsubscribe cleanly.  
🔹 Always return results when emitting (for testability).  
🔹 Structure your data for **quick lookup and minimal mutation**.

---

## 🔗 Solution Discussion

Check out my full solution and explanation on LeetCode:  
👉 [2694. Event Emitter - Solution](https://leetcode.com/problems/event-emitter/solutions/6640255/2694-event-emitterc-solution-by-runl4avd-2lbk)

---

## 💬 **Discussion & Feedback**

✅ If you found this helpful, **please star⭐ the repository!**  
💡 Got improvements, or want to share your own implementation style?  
Feel free to drop suggestions or PRs — let’s learn and grow together! 🚀🔥

---
