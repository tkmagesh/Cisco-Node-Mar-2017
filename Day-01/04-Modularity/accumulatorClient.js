/*accumulator.js
	{
		add(n)
		subtract(n)
		multiply(n)
		divide(n)
		getResult()
	}*/

var accumulator = require('./accumulator');
accumulator.add(10);
accumulator.subtract(5);
accumulator.multiply(20);
accumulator.divide(2);
console.log(accumulator.getResult()); //=> 50
