var calculator = require('./calculator.js');
console.log('calculator -> ', calculator);
var n1 = 10,
	n2 = 20;

console.log(calculator.add(n1,n2));
console.log(calculator.subtract(n1,n2));
console.log(calculator.multiply(n1,n2));
console.log(calculator.divide(n1,n2));