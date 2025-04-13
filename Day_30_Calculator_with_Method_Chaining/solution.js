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
    if (value === 0) {
      throw new Error("Cannot divide by zero");
    }
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

const calc1 = new Calculator(10).add(5).subtract(7).getResult();
console.log(calc1); // 10 + 5 - 7 = 8

const calc2 = new Calculator(2).multiply(5).power(2).getResult();
console.log(calc2); // (2 * 5) ^ 2 = 100
