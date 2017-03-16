var accumulatorFactory = require('./accumulator');
var accumulator = accumulatorFactory();
accumulator.add(10);
accumulator.subtract(5);
accumulator.multiply(20);
accumulator.divide(2);
console.log(accumulator.getResult()); //=> 50
