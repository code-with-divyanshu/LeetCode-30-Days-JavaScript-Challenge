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

const emitter = new EventEmitter();

function onClickCallback() {
  return 99;
}
const sub = emitter.subscribe("onClick", onClickCallback);

let ans1 = emitter.emit("onClick");
console.log(ans1); // [99]
let ans2 = sub.unsubscribe();
console.log(ans2); // undefined
let ans3 = emitter.emit("onClick");
console.log(ans3); // []
