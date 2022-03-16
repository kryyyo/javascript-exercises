const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  function getTotal(total, current) {
    return total + current
  }


  return array.reduce(getTotal, 0)
};

const multiply = function(array) {
  function getProduct (total, current) {
    return total * current
  }

  return array.length ? array.reduce(getProduct) : 0;

};

const power = function(num1, num2) {
	return num1 ** num2 
};

const factorial = function(number) {
  if (number === 0) {
    return 1;
  }

  let product = 1; 

  for (let i = number; i > 0; i--) {
    product *= i;
  }

  return product
};

// Another solution for factorial (recursiveFactorial) 

/* 

const recursiveFactorial = function(n) {
  if (n === 0) {
    return 1;
  }
  return n * recursiveFactorial (n-1);
};


*/

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
