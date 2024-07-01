const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numberList) {
	return numberList.reduce((acc, val) => acc + val, 0);
};

const multiply = function(numberList) {
  return numberList.reduce((acc, val) => acc * val);
};

const power = function(base, exp) {
	return Math.pow(base, exp);
};

const factorial = function(num) {
  if (num === 0) return 1;
  let result = 1;
	for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
