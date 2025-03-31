// Using JavaScript Objects and `setTimeout()

var TimeLimitedCache = function () {
  this.cache = {};
};

TimeLimitedCache.prototype.set = function (key, value, duration) {
  let isKey = this.cache[key];

  if (isKey) {
    this.cache[key].value = value;
    this.cache[key].duration = duration;
    clearTimeout(this.cache[key].ref);
  } else {
    this.cache[key] = { value, duration };
  }
  this.cache[key].ref = setTimeout(() => delete this.cache[key], duration);

  return Boolean(isKey);
};

TimeLimitedCache.prototype.get = function (key) {
  let isKey = this.cache[key];
  return isKey ? isKey.value : -1;
};

TimeLimitedCache.prototype.count = function () {
  return Object.keys(this.cache).length;
};

const timeLimitedCache = new TimeLimitedCache();
console.log(timeLimitedCache.set(1, 42, 1000)); // false
console.log(timeLimitedCache.get(1)); // 42
console.log(timeLimitedCache.count()); // 1
